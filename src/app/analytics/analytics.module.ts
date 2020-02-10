import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { Statement4Component } from './statement4/statement4.component';
import { AnalyticsComponent } from './analytics.component';
import { HttpClientModule } from '@angular/common/http';
// import {Ng2GoogleChartModule} from 'ng2-googlechart';
import { Ng2GoogleChartsModule } from "ng2-google-charts";

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [Statement4Component, AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    Ng2GoogleChartsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ]
})
export class AnalyticsModule { }
