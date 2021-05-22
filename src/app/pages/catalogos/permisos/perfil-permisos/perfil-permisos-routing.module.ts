import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPermisosComponent } from './perfil-permisos.component';



const routes: Routes = [
  {
      path: '',
      component: PerfilPermisosComponent
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
export class PerfilPermisosRoutingModule { }
