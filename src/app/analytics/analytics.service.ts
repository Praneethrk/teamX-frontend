import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Fetch Academic Year
  get_academic_years(): Observable<any> {
    let uri = `${this.url}get_academic_years`;
    return this.http.get(uri);
}

  //Fetch semesters
  get_semesters(): Observable<any> {
    let uri = `${this.url}get_semesters`;
    return this.http.get(uri);
  }



  get_user_usn(email): Observable<any> {
    let uri =`${this.url}get_user_usn/${email}`;
    return this.http.get(uri);
  }

  get_placement_offers(term,usn): Observable<any> {
    let uri = `${this.url}get_placement_offer/${term}/${usn}`;
    return this.http.get(uri);
  }
}