import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyViewComponent } from './technology-view/technology-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TechnologyViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TechnologyViewComponent
  ]
})
export class TechnologyModule { }
