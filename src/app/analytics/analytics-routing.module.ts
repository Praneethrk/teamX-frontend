import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummycomponentComponent } from '../dummycomponent/dummycomponent.component';
import { Statement4Component } from './statement4/statement4.component';
import { AnalyticsComponent } from './analytics.component';



const routes: Routes = [
{
  path:'',
  redirectTo:'/analytics',
  pathMatch:'full'
},
{
  path:'',
  component:AnalyticsComponent,
  children:
  [
    {
      path:'statement1',
      component:Statement4Component
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
