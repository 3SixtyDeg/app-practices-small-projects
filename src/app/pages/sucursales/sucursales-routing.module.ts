import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalesComponent } from './sucursales.component';



const routes: Routes = [
  {
      path: '',
      component: SucursalesComponent
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
export class SucursalesRoutingModule { }
