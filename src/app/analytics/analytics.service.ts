import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  baseurl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  get_academic_years(): Observable<any> {
    let url = `${this.baseurl}academicyear`;
    return this.http.get(url);
  }

  get_term_details(): Observable<any> {
    let url = `${this.baseurl}termNumber`;
    return this.http.get(url)

  }

  

  get_user_usn(email): Observable<any> {
    let uri =`${this.baseurl}get_user_usn/${email}`;
    return this.http.get(uri);
  }

  get_placement_offers(term,usn): Observable<any> {
    let uri = `${this.baseurl}get_placement_offer/${term}/${usn}`;
    return this.http.get(uri);
  }

  get_uemarks(year,dept,usn,term): Observable<any>{
    let uri = `${this.baseurl}get_uescore/${year}/${dept}/${usn}/${term}`;
    return this.http.get(uri);
  }

  get_user_dept(email): Observable<any> {
    let uri =`${this.baseurl}get_user_dept/${email}`;
    return this.http.get(uri);
  }
}
