import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationViewComponent } from './destination-view/destination-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabComponent } from './tab/tab.component';
import { HighlightComponent } from './highlight/highlight.component';


@NgModule({
  declarations: [
    DestinationViewComponent,
    TabComponent,
    HighlightComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    DestinationViewComponent
  ]
})
export class DestinationModule { }
