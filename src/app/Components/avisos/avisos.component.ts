import { Component, OnInit } from '@angular/core';
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  constructor(public servicioAvisos: AvisosService) {}



  ngOnInit(): void {
    
  }

  
}
