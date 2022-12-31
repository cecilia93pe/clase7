import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewViewComponent } from './crew-view/crew-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CrewViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CrewViewComponent
  ]
})
export class CrewModule { }
