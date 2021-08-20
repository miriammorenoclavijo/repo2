
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.css']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo!: FormGroup;
  submitted = false;
  //definimos la variable que vamos a recibir del padre
  @Input() correo: any;
  //definimos la variable que mandaremos al padre de tipo event emitter con cualquier evento any
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private servicioAvisos: AvisosService) { }

  ngOnInit() {
    this.nuevoCorreo = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });

    //si se ha recibido un correo del padre actualiza los campos del formulario con los valores recibidos
    if(this.correo != undefined){
      
      this.nuevoCorreo.patchValue({
        titulo: 'Re: '+ this.correo.titulo, 
        destinatario: this.correo.emisor
      });
    }
  }

get formulario() { return this.nuevoCorreo.controls; }

onSubmit() {
    this.submitted = true;

    if (this.nuevoCorreo.invalid) {
        return;
    }

    let correo = this.nuevoCorreo.value; //asigna el objeto completo creado en OnInit 
    correo.leido= false;
    correo.emisor= 'correoEmisor1@openWebinar.inv';

    console.log(correo);

    this.onReset();
    
    this.servicioAvisos.showMenssage(`Correo enviado a ${correo.emisor}`);
}

onReset() {
    
    this.accionRealizada.emit();
    //al cancelar o enviar que ejecuta este método al final emite el evento al padre, que en su método pondrá responder a false para que no se vea el componente hijo
}

cancel(){
  this.onReset();
  this.servicioAvisos.showMenssage("Envio Cancelado");
}

}
