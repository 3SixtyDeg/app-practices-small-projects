import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../../shared/error-page/error-page.component';



const routes: Routes = [
  {
      path: '',
      component: ErrorPageComponent
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule)
  },
  {
    path: 'permisos',
    loadChildren: () => import('./permisos/permisos.module').then(m => m.PermisosModule)
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
export class CatalogosRoutingModule { }
