import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionComponent } from './configuracion.component';



@NgModule({
  declarations: [
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule { }
