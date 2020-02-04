import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { Statement4Component } from './statement4/statement4.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AnalyticsComponent, Statement4Component],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    FormsModule
  ]
})
export class AnalyticsModule { }
