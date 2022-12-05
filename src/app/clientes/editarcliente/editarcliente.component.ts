import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interface/clientes.interface';
import { ClientesService } from '../service/clientes.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editarcliente.component.html',
  //styleUrls: ['./editarcliente.component.css']
})
export class EditarclienteComponent implements OnInit {

  constructor(private servicio:ClientesService) { }

  cliente:Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    telefono: ''
  }

  clientesH: Cliente[]=[];

  ngOnInit(): void {
    this.clientesH = this.servicio.usuarios
  }
    actualizar(): void{

        this.servicio.actualizarUsuario(this.cliente, this.clientesH)

        this.cliente = {
          id: 0,
          nombre: '',
          apellido: '',
          correo: '',
          telefono: ''
        }

        this.clientesH = this.servicio.usuarios
    }
}
