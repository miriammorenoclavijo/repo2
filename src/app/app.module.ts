import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NuevoCorreoComponent } from './Components/nuevo-correo/nuevo-correo.component';
import { ListaCorreosComponent } from './Components/lista-correos/lista-correos.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoCorreoComponent,
    ListaCorreosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
