import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaclienteComponent } from './clientes/altacliente/altacliente.component';
import { EditarclienteComponent } from './clientes/editarcliente/editarcliente.component';
import { ClientesService } from './clientes/service/clientes.service';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './registro/login/login.component';
import { SignupComponent } from './registro/signup/signup.component';
import { ClientesComponenet } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    SignupComponent,
    ClientesComponenet,
    AltaclienteComponent,
    EditarclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
