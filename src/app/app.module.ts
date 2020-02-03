import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummycomponentComponent } from './dummycomponent/dummycomponent.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonLeftNavComponent } from './common-left-nav/common-left-nav.component';
import { CommonHeaderService } from './common-header/common-header.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './auth/auth.interceptor';



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
    FormsModule

    
  ],
  providers: [CommonHeaderService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
