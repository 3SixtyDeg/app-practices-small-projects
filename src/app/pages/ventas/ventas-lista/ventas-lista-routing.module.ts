import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasListaComponent } from './ventas-lista.component';



const routes: Routes = [
  {
      path: '',
      component: VentasListaComponent
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
export class VentasListaRoutingModule { }
