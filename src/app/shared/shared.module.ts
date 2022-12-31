import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TitleComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    TitleComponent,
    NavbarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
