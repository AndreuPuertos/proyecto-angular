import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interface/clientes.interface';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent {

  constructor(private servicio:ClientesService) { }

  nuevo: Cliente = {
    id: 0,
    nombre:"",
    apellido:"",
    correo:"",
    telefono:""
  }

  agregar():void{
    console.log(this.nuevo);

    this.servicio.agregarNuevoCliente(this.nuevo);

    this.nuevo= {
      id: 0,
      nombre:"",
      apellido:"",
      correo:"",
      telefono:""
    }
  }

}
