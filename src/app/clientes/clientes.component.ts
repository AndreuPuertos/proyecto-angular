import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interface/clientes.interface';
import { ClientesService } from './service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  //styleUrls: ['./clientes.component.css']
})
export class ClientesComponenet implements OnInit {

  constructor(private servicio:ClientesService) { }

  usuario:Cliente = {
    id:0,
    nombre:"",
    apellido:"",
    correo:"",
    telefono:""
  }

  usuarios:Cliente[]=[]

  ngOnInit(): void {
    this.usuarios=this.servicio.usuarios  //Recogemos los usuarios para poder pintarlos
  }

  //public borrarUsuario(usuario:string):void{
    public borrarUsuario(id:number):void{
    console.log("Se borra el usuario")
    this.servicio.borrarUsuario(id);
    this.usuarios=this.servicio.usuarios //Recogemos los usuarios actualizados
  }
}
