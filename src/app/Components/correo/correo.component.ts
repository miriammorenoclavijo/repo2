import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() { 
    this.correo ={
      titulo: "Titulo email",
      cuerpo: "Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email,Cuerpo del email",
      emisor: "correoEmisor@correo.inv",
      destinatario: "correoReceptor@correo.inv"
    }
  }

  ngOnInit(): void {

  }

}
