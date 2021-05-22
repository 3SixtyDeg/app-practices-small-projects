import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../../../shared/error-page/error-page.component';



const routes: Routes = [
  {
      path: '',
      component: ErrorPageComponent
  },
  {
    path: 'perfil-permisos',
    loadChildren: () => import('./perfil-permisos/perfil-permisos.module').then(m => m.PerfilPermisosModule)
  },
  {
    path: 'usuario-permisos',
    loadChildren: () => import('./usuario-permisos/usuario-permisos.module').then(m => m.UsuarioPermisosModule)
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
export class PermisosRoutingModule { }
