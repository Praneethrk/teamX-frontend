import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  env = environment
  public tanentDetails = new Subject<string>();
  constructor(private route:Router) { }

  setToken(token: string) {
    console.log("token",token)
    localStorage.setItem("token", token);
    this.tanentDetails.next(token);
    return true;
    
  }
  
  isLoggedIn(){
    const token = this.getToken();
    this.tanentDetails.next(token);
    return token != null;
  }
  getToken() {
    return localStorage.getItem("token");
  }

  setUserInfo(user:any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserInfo(){
    if(localStorage.getItem("user")){
      return JSON.parse(localStorage.getItem("user"));
    }
   }

   logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.route.navigate(["login"]);
  }
}
