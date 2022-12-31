import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeViewComponent
  ]
})
export class HomeModule { }
