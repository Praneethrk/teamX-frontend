import { Component, OnInit } from '@angular/core';
import { CommonHeaderService } from './common-header.service';

import { AuthService } from 'src/app/auth/auth.service';
import { AppComponent } from 'src/app/app.component';
import { AnalyticsService } from '../analytics.service';

declare var $:any;
@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  session: any;
  currentRole: string;
  roles: any[];
  tenantName: string;
  user;
  anotherRole = false;
  userName: any;
  constructor(public commonHeaderService: CommonHeaderService, private appComponent: AppComponent,private authService:AuthService, private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.authService.tanentDetails.subscribe(name => this.tenantName = name);

    
    this.user = this.authService.getUserInfo();
    console.log("User infor"+this.user['user']);
    this.get_name_by_email(this.user['user'])
   
  }

  logOut(){
    this.authService.logout();
    this.tenantName = "";
  }

  changeRole(role: string) {

  }
  get_name_by_email(email){
    this.analyticsService.get_user_name_by_email(email).subscribe(res=>{
      this.userName = res['name']
      console.log(this.userName)
    })
  }

  resize() {
    if($('.sidebar-mini').hasClass('sidebar-collapse')) {
      $('.sidebar-mini').removeClass('sidebar-collapse')
    } else {
      $('.sidebar-mini').addClass('sidebar-collapse')
    }
  }
}
