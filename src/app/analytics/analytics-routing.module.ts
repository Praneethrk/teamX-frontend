import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { Statement4Component } from './statement4/statement4.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'/analytics',
    pathMatch:'full',
  },
  {
    path:'',
    component:AnalyticsComponent,
    children:
    [
      {
        path:'statement4',
        component:Statement4Component,
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
