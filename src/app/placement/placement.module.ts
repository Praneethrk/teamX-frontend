import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementRoutingModule } from './placement-routing.module';
import { HomeComponent } from './home/home.component';
import { PlacementComponent } from './placement.component';


@NgModule({
  declarations: [HomeComponent, PlacementComponent],
  imports: [
    CommonModule,
    PlacementRoutingModule
  ]
})
export class PlacementModule { }
