
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';//lo necesitamos para indicar con el decorador input lo que esperamos recibir del componente padre

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

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.nuevoCorreo = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });
    
    if(this.correo != undefined){
      console.log("A",this.correo);
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

    alert("Correo Enviado \nEliminamos el formulario");
    this.onReset();
}

onReset() {
    this.submitted = false;
    this.nuevoCorreo.reset();
}

}
