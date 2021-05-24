import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
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
