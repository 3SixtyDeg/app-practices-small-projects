import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioPermisosComponent } from './usuario-permisos.component';



const routes: Routes = [
  {
      path: '',
      component: UsuarioPermisosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioPermisosRoutingModule { }
