import { NgModule } from '@angular/core';
import { VentasListaRoutingModule } from './ventas-lista-routing.module';
import { CommonModule } from '@angular/common';
import { VentasListaComponent } from './ventas-lista.component';



@NgModule({
  declarations: [
    VentasListaComponent
  ],
  imports: [
    CommonModule,
    VentasListaRoutingModule
  ]
})
export class VentasListaModule { }
