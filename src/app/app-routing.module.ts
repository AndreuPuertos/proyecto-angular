import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaclienteComponent } from './clientes/altacliente/altacliente.component';
import { ClientesComponenet } from './clientes/clientes.component';
import { EditarclienteComponent } from './clientes/editarcliente/editarcliente.component';

import { LoginComponent } from './registro/login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SignupComponent } from './registro/signup/signup.component';


const routes: Routes = [
  {
    path:'',
    component: RegistroComponent,
    pathMatch:'full'
  },
  {
    path:'clientes',
    component: ClientesComponenet,
    children: [
      {
        path: 'editarcliente/:id',
        component: EditarclienteComponent
      },
      {
        path: 'altacliente',
        component: AltaclienteComponent
      }
    ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
