import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';



const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          itemName: 'Dashboard'
        }
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
        data: {
          itemName: 'Usuarios'
        }
      },
      {
        path: 'perfiles',
        loadChildren: () => import('./perfiles/perfiles.module').then(m => m.PerfilesModule),
        data: {
          itemName: 'Perfiles'
        }
      },
      {
        path: 'sucursales',
        loadChildren: () => import('./sucursales/sucursales.module').then(m => m.SucursalesModule),
        data: {
          itemName: 'Sucursales'
        }
      },
      {
        path: 'ventas',
        loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule),
        data: {
          itemName: 'Ventas'
        }
      },
      {
        path: 'catalogos',
        loadChildren: () => import('./catalogos/catalogos.module').then(m => m.CatalogosModule)
      },
      {
        path: '**',
        redirectTo: '/page-not-found'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
