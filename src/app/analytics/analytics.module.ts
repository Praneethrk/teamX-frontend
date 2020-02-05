import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { Statement1Component } from './statement1/statement1.component';
import { AnalyticsComponent } from './analytics.component';
import { HttpClientModule } from '@angular/common/http';
// import {Ng2GoogleChartModule} from 'ng2-googlechart';
import { Ng2GoogleChartsModule } from "ng2-google-charts";

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Statement2Component } from './statement2/statement2.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [Statement1Component, AnalyticsComponent, Statement2Component],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    Ng2GoogleChartsModule,
    MatCardModule
    
  ]
})
export class AnalyticsModule { }
