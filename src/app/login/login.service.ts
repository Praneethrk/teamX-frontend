import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  env = environment
  constructor(private http: HttpClient) { }

  login(username:string){
    let url = `${this.env.baseUrl}login`;
    let user = {"username": username }
    return this.http.post<any>(url, user)
   
  }

  user(): Observable<any> {
    let url = `${this.env.baseUrl}user`;
    return this.http.get(url);
  }

}
