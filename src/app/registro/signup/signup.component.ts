import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaz-usuario';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nuevo: Usuario ={
    email: "",
    password: "",
    name: "",
    phone: ""
  };
  variable:boolean=false;
  ruta:string="";

  constructor(private servicio:RegistroService) { }

  ngOnInit(): void {
  }

  registrar():void{

    this.variable = this.servicio.registro(this.nuevo);
    this.ruta = "";
    if(this.variable){
      this.ruta = "http://localhost:4200/clientes";
      window.location.href = this.ruta;
    }else{
      this.variable=true;
    }
  }

}
