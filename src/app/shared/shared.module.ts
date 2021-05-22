import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SidenavComponent,
    BreadcrumbComponent,
    FooterComponent,
    NavbarComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    BreadcrumbComponent,
    FooterComponent,
    NavbarComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
