import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DummycomponentComponent } from './dummycomponent/dummycomponent.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DummycomponentComponent
  },
  {
    path:'login',
    component:LoginComponent
  },

  {
    path: 'analytics',
    component: DummycomponentComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import("./analytics/analytics.module").then(m => m.AnalyticsModule)

  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
