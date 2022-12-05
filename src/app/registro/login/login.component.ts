import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaz-usuario';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  nuevo:Usuario ={
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

  validar():void{

    this.variable= this.servicio.login(this.nuevo);
    this.ruta = "";
    if(this.variable){
      this.ruta = "http://localhost:4200/clientes";
      window.location.href = this.ruta;
    }else{
      this.variable=true;
    }
  }

}
