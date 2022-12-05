import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AltaclienteComponent } from './altacliente/altacliente.component';
import { ClientesService } from './service/clientes.service';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    ClientesService
  ]
})
export class ClientesModule { }
