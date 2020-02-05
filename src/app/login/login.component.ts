import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  psw:string;
  constructor(private loginservice:LoginService,private route:Router,private authService:AuthService,) { }

  ngOnInit() {
  //   if (this.authService.isLoggedIn) {
  //     this.route.navigate(['/analytics']);
  //  }
  }

  loginWithTenant() {
    console.log(this.email);
         this.loginservice.login(this.email).subscribe(data => {
           console.log("login",data)
         this.authService.setToken(data["access_token"]);
         this.loginservice.user().subscribe(data => {
           console.log("data",data)
            this.authService.setUserInfo(data);
            this.route.navigate(["/analytics"]);
          });
        });
        
       
    }
 
}
