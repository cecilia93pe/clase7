import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DestinationModule } from './features/destination/destination.module';
import { CrewModule } from './features/crew/crew.module';
import { TechnologyModule } from './features/technology/technology.module';

import { DestinationViewComponent } from './features/destination/destination-view/destination-view.component';
import { CrewViewComponent } from './features/crew/crew-view/crew-view.component';
import { TechnologyViewComponent } from './features/technology/technology-view/technology-view.component';
import { HomeModule } from './features/home/home.module';
import { HomeViewComponent } from './features/home/home-view/home-view.component';

const routes: Routes = [
  {
    path: 'destination',
    component: DestinationViewComponent
  },
  {
    path: 'crew',
    component: CrewViewComponent
  },
  { path: '', component: HomeViewComponent },
  { path: 'technology', component: TechnologyViewComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrewModule,
    DestinationModule,
    TechnologyModule,
    HomeModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
