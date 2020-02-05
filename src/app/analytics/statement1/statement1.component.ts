import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { AuthService } from 'src/app/auth/auth.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ChartSelectEvent } from 'ng2-google-charts';


@Component({
  selector: 'app-statement1',
  templateUrl: './statement1.component.html',
  styleUrls: ['./statement1.component.css']
})
export class Statement1Component implements OnInit {
  academicYears: string[] = [];
  termnumbers: [] = [];
  public firstLevelChart: GoogleChartInterface;
  title: string;
  error_message: string
  error_flag = false
  chart_visibility = false;
  terms;
  selectedyear;
  user_info;
  showSpinner = false;
  dept;
  event:any;
  email:any ="";
  offers:any[] = [];
  placement:boolean=false;
  ueScore;
  constructor(private analyticsService: AnalyticsService, private authService: AuthService) { }

  ngOnInit() {
    this.user_info = this.authService.getUserInfo()
    this.get_academic_years()
    this.get_term_numbers()
    this.get_dept()
  }
  get_academic_years() {
    this.analyticsService.get_academic_years().subscribe(res => {
      this.academicYears = res['acdemicYear'];
    })
  }

  get_term_numbers() {
    this.analyticsService.get_term_details().subscribe(res => {
      this.termnumbers = res['term_numbers']
    }
    )
  }

  get_dept(){
    this.analyticsService.get_user_dept(this.user_info['email']).subscribe(res=>{
      this.dept = res["res"];
      console.log(this.dept)
    })
  }
  searchbutton() {
    if(!this.placement){

      this.analyticsService.get_placement_offers(this.academicYears, this.user_info['usn']).subscribe(res=>{
        let result = res["res"];
        for(let res of result)
        {
          this.offers.push([res['companyName'],res['salary']])
        }
        console.log(this.offers);
      })
      this.placement = true
    }

    this.analyticsService.get_uemarks(this.academicYears,"IS",this.user_info['usn'],"6").subscribe(res => {
      this.ueScore = res['res'];
      this.score(this.ueScore);
    })
  
  }

  score(data){
    let dataTable = []
    dataTable.push([
      "courseName",
      "ueScore %",
      // "Attendance %", { type: 'string', role: 'tooltip' }
    ]);
    // for (let i = 0; i < data.length; i += 1) {
    //   dataTable.push([data[i]['courseName'],
    //   data[i]['avg_ia_score'], "IA % : " + data[i]['avg_ia_score'] + "\n" +
    //   "Attendance % : " + data[i]['attendance_per'], data[i]['attendance_per'], "IA % : " + data[i]['avg_ia_score'] + "\n" +
    //   "Attendance % : " + data[i]['attendance_per']])
    // }
    for(let d of data){
      dataTable.push([d['courseName'],d['ueScore']]);

    }
    if (dataTable.length > 1) {
      this.chart_visibility = true
      this.error_flag = false
      this.graph_data(dataTable)
    }
    else {
      this.error_flag = true
      this.error_message = "Data doesnot exist for the entered criteria"
    }
  }
  graph_data(data) {
    this.showSpinner = false
    this.title = 'Course-wise Attendance %',
      this.firstLevelChart = {
        chartType: "ColumnChart",
        dataTable: data,
        options: {
          height:800,
         
        }


  }
}
}
