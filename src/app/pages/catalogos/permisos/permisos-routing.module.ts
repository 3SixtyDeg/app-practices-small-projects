import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'perfil-permisos',
    loadChildren: () => import('./perfil-permisos/perfil-permisos.module').then(m => m.PerfilPermisosModule)
  },
  {
    path: 'usuario-permisos',
    loadChildren: () => import('./usuario-permisos/usuario-permisos.module').then(m => m.UsuarioPermisosModule)
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
export class PermisosRoutingModule { }
