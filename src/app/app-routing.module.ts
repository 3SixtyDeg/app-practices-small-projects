import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canLoad: [ AuthGuard ],
    canActivate: [AuthGuard]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
