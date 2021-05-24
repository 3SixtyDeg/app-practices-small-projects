import { NgModule } from '@angular/core';
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
