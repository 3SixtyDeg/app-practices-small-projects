import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPermisosRoutingModule } from './perfil-permisos-routing.module';
import { PerfilPermisosComponent } from './perfil-permisos.component';



@NgModule({
  declarations: [
    PerfilPermisosComponent
  ],
  imports: [
    CommonModule,
    PerfilPermisosRoutingModule
  ]
})
export class PerfilPermisosModule { }
