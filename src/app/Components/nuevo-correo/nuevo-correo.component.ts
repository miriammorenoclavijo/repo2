import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.css']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.nuevoCorreo = this.formBuilder.group({
      titulo: ['Incluye un título', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });
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
