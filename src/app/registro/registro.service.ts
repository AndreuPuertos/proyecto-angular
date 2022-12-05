import { Injectable } from '@angular/core';
import { Usuario } from './interfaces/interfaz-usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  private _usuarios:Usuario[] = [
    {
      email: "pepe@gmail.com",
      password: "contra1",
      name: "pepe",
      phone: "123"
    },
    {
      email: "ismael@gmail.com",
      password: "contra2",
      name: "pepe",
      phone: "123"
    },
    {
      email: "goku@gmail.com",
      password: "contra3",
      name: "pepe",
      phone: "123"
    }
  ];

  get usuarios(){
    return this._usuarios;
  }

  //Logeo
  login(nuevo:Usuario):boolean{

    let logeo:boolean=false;

    for(let i=0; i<this._usuarios.length; i++){
      if((this._usuarios[i].password==nuevo.password) && (this._usuarios[i].email==nuevo.email)){
        logeo=true;
      }
    }

    //console.log("PRUEBA DE CONSOLA: ", this._usuarios.includes(nuevo.email))
    return logeo;
  }

  registro(nuevo:Usuario):boolean{

    let variable:boolean=false;
    console.log("creando usuario", nuevo);
    this._usuarios.push(nuevo);
    console.log(this._usuarios);
    if(!(nuevo.password=="") && !(nuevo.email=="")){

      variable=true;
    }
    return variable;

  }







}
