import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalesComponent } from './sucursales.component';



@NgModule({
  declarations: [
    SucursalesComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
