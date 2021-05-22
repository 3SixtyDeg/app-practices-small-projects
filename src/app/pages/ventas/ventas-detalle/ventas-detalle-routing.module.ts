import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasDetalleComponent } from './ventas-detalle.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
      path: '',
      component: VentasDetalleComponent
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
export class VentasDetalleRoutingModule { }
