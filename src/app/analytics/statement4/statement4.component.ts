import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Observable } from 'rxjs';
import { userInfo } from 'os';

@Component({
  selector: 'app-statement4',
  templateUrl: './statement4.component.html',
  styleUrls: ['./statement4.component.css']
})
export class Statement4Component implements OnInit {
  academic: String[] = [];
  semester: String[] = [];
  SelectedYear;
  SelectedSem;
  usn;
  event:any;
  email:any ="";
  offers:any[] = [];
  constructor(private AnalyticsService: AnalyticsService) { }

  ngOnInit() {
    this.email = localStorage.getItem("user");
    let user = JSON.parse(this.email)
    //acadamic Year
    this.AnalyticsService.get_academic_years().subscribe(res => {
      this.academic = res['res'];
    })
    //semester
    this.AnalyticsService.get_semesters().subscribe(res => {
      this.semester = res["res"];
    })

    this.AnalyticsService.get_user_usn(user.user).subscribe(res=>{
      this.usn = res["usn"];
    })
  }

  onSearch(){
    // this.event = event;
    this.AnalyticsService.get_placement_offers(this.SelectedYear ,this.usn).subscribe(res=>{
        let result = res["res"];
        console.log(result);
        for(let res of result)
        {
          this.offers.push([res['companyName'],res['salary']])
        }
    })
  }

}