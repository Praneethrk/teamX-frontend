import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statement4',
  templateUrl: './statement4.component.html',
  styleUrls: ['./statement4.component.css']
})
export class Statement4Component implements OnInit {
  academic: String[] = [];
  semester: String[] = [];
  constructor(private AnalyticsService: AnalyticsService) { }

  ngOnInit() {
    this.AnalyticsService.get_academic_years().subscribe(res => {
      this.academic = res['res'];
    })
    this.AnalyticsService.get_semesters().subscribe(res => {
      this.semester = res["res"];
    })
  }

}