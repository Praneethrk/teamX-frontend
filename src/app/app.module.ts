import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummycomponentComponent } from './dummycomponent/dummycomponent.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonLeftNavComponent } from './common-left-nav/common-left-nav.component';
import { CommonHeaderService } from './common-header/common-header.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    DummycomponentComponent,
    CommonLeftNavComponent,
    CommonHeaderComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,

    
  ],
  providers: [CommonHeaderService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
