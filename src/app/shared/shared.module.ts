import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    AsideComponent,
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsideComponent,
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
