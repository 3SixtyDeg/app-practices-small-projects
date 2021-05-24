import { NgModule } from '@angular/core';
import { VentasDetalleRoutingModule } from './ventas-detalle-routing.module';
import { CommonModule } from '@angular/common';
import { VentasDetalleComponent } from './ventas-detalle.component';



@NgModule({
  declarations: [
    VentasDetalleComponent
  ],
  imports: [
    CommonModule,
    VentasDetalleRoutingModule
  ]
})
export class VentasDetalleModule { }
