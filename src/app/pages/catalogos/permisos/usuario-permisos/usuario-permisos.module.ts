import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPermisosRoutingModule } from './usuario-permisos-routing.module';
import { UsuarioPermisosComponent } from './usuario-permisos.component';



@NgModule({
  declarations: [
    UsuarioPermisosComponent
  ],
  imports: [
    CommonModule,
    UsuarioPermisosRoutingModule
  ]
})
export class UsuarioPermisosModule { }
