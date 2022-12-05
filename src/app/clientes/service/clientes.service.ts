import { Injectable, Output } from '@angular/core';
import { Cliente } from 'src/app/interface/clientes.interface';

@Injectable()
export class ClientesService {



  constructor() {
    console.log("Servicio inicializado")
   }

  private _clientes:Cliente[] = [
    {
      id:1,
      nombre:"Rolando",
      apellido:"Lopez",
      correo:"formador@cursos.es",
      telefono:"90182374",
    },
    {
      id:2,
      nombre:"Peter",
      apellido:"Jackson",
      correo:"esdla@correo.com",
      telefono:"0981734",
    },
    {
      id:3,
      nombre:"Chiquito",
      apellido:"DeLaCalzada",
      correo:"nopuedorl@email.jarl",
      telefono:"0198374901823",
    }
  ];

  get clientes(){
    return this._clientes;
  }

  agregarNuevoCliente(cliente:Cliente):void{
    cliente.id = this._clientes.length + 1;
    console.log("Último cliente agregado: ",cliente);
    this._clientes.push(cliente);
    console.log("Lista completa: ", this._clientes); //imprimir listado clientes
  }

  get usuarios(){
    return this._clientes;
  }

  borrarUsuario(id:number):void{
    let cont:number=0;
    for (let b of this._clientes) {
      if(b.id==id){
        console.log("B: ",b)
        this._clientes.splice(cont,1);
      }
      cont++
    }
    console.log("Vector nuevo: "+this._clientes)
  }


  actualizarUsuario(cliente:Cliente, clientesH:Cliente[]){
    var exito:boolean = true;
    for(var i:number = 0; i<clientesH.length; i++){
      if (i+1 != cliente.id){
        if(this._clientes[i].correo == cliente.correo || this._clientes[i].telefono == cliente.telefono ){
          exito = false;
        }
      }
    }
    if (exito){
      clientesH[cliente.id].nombre = cliente.nombre;
      clientesH[cliente.id].apellido = cliente.apellido;
      clientesH[cliente.id].correo = cliente.correo;
      clientesH[cliente.id].telefono = cliente.telefono;
    }
  }

}
