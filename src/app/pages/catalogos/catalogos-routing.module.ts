import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule)
  },
  {
    path: 'permisos',
    loadChildren: () => import('./permisos/permisos.module').then(m => m.PermisosModule)
  },
  { path: '', redirectTo: '/page-not-found', pathMatch: 'full' }
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
