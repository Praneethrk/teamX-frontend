import { Component, OnInit } from '@angular/core';
import { CommonHeaderService } from './common-header.service';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth/auth.service';
import { AnalyticsService } from '../analytics/analytics.service';
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
  userRole: any;
  
  constructor(public commonHeaderService: CommonHeaderService, private appComponent: AppComponent,private authService:AuthService,  private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.authService.tanentDetails.subscribe(name => this.tenantName = name);

    
    this.user = this.authService.getUserInfo();
    let arr = this.user["roles"];
    this.get_name_by_email(this.user['user'])
    if (this.user["roles"] == "STUDENT") {
      this.userRole = this.user["roles"]
    }
    else if (arr[0] == "FACULTY" && arr[2] == "PRINCIPAL") {
      this.userRole = arr[2]
    }
    else if (arr[2] == "HOD") {
      this.userRole = arr[2]
    }
    else if (arr[0] == "FACULTY") {
      this.userRole = arr[0]
    }
    
   
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
