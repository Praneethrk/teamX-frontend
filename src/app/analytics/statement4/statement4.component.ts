import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { AuthService } from 'src/app/auth/auth.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ChartSelectEvent } from 'ng2-google-charts';
import { templateSourceUrl } from '@angular/compiler';


@Component({
  selector: 'app-statement4',
  templateUrl: './statement4.component.html',
  styleUrls: ['./statement4.component.css']
})
export class Statement4Component implements OnInit {
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
  event: any;
  email: any = "";
  offers: any[] = [];
  placement: boolean = false;
  ueScore;
  array;
  modelcourse: any;
  modelScore: any;
  userRole: string[] = [];
  deptName: any;
  facultyNames: any[] = [];
  faculty:boolean = false;
  constructor(private analyticsService: AnalyticsService, private authService: AuthService) { }

  ngOnInit() {
    this.user_info = this.authService.getUserInfo()
    let arr = this.user_info["roles"];
    console.log(this.user_info)
    if (this.user_info["roles"] == "STUDENT") {
      this.userRole.push("STUDENT");
      this.get_academic_years()
      this.get_term_numbers()
      this.get_dept()
    }
    else if (arr[0] == "FACULTY" && arr[2] == "PRINCIPAL") {
      this.userRole.push("PRINCIPAL");
      console.log("PRINCIPAL")
    }
    else if (arr[2] == "HOD") {
      this.userRole.push("HOD");
      this.get_academic_years()
      this.get_term_numbers()
      // employeeGivenId
    }
    else if (arr[0] == "FACULTY") {
      this.userRole.push("FACULTY");
      this.get_academic_years()
      this.get_term_numbers()
    }

  }
  // STUDENT STARTS
  get_academic_years() {
    this.analyticsService.get_academic_years().subscribe(res => {
      this.academicYears = res['acdemicYear'];
    })
  }

  get_term_numbers() {
    this.analyticsService.get_term_details().subscribe(res => {
      this.termnumbers = res['term_numbers'];
    }
    )
  }

  get_dept() {
    this.analyticsService.get_user_dept(this.user_info['user']).subscribe(res => {
      this.dept = res["res"];
    })
  }
  searchbutton() {
    if (!this.placement) {

      this.analyticsService.get_placement_offers(this.academicYears, this.user_info['usn']).subscribe(res => {
        let result = res["res"];
        for (let res of result) {
          this.offers.push([res['companyName'], res['salary']])
        }
        console.log(this.offers);
      })
      this.placement = true
    }

    this.analyticsService.get_uemarks(this.selectedyear, this.dept, this.user_info['usn'], this.terms).subscribe(res => {
      this.ueScore = res['res'];
      this.score(this.ueScore);
    })

  }

  score(data) {
    let dataTable = []
    dataTable.push([
      "courseName",
      "ueScore %"
    ]);
    for (let d of data) {
      dataTable.push([d['courseName'], d['ueScore']]);

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
    this.title = 'Course-wise Performence %',
      this.firstLevelChart = {
        chartType: "ColumnChart",
        dataTable: data,
        options: {
          bar: { groupWidth: "13%" },
          height: 500,
          vAxis: {
            title: "Performance %",
            gridlines: { color: '#e0dbda', minSpacing: 50 },
          },
          hAxis: {
            title: "Courses",
            gridlines: { color: '#e0dbda', minSpacing: 50 },
          },
          chartArea: {
            left: 80,
            right: 80,
            top: 100,
            // backgroundColor:"#faf6f2",
          },
          legend: {

            position: "top",
            alignment: "end"
          },
          seriesType: "bars",
          colors: ["#669999"],
          fontName: "Times New Roman",
          fontSize: 13,
          focusTarget: "datum",

        }
      }
  }

  //On chart select
  onChartSelect(event: ChartSelectEvent) {
    this.array = event.selectedRowFormattedValues;
    this.modelcourse = this.array[0];
    this.modelScore = this.array[1];
  }
  // STUDENT ENDS

  //FACULTY STARTS

  //FACULTY ENDS
  searchButtonFaculty() {
    if(!this.faculty){
      this.get_faculty_details();
      this.faculty = true;
    }
  }
  // HOD Starts
  
  searchbuttonhod() {
    if(!this.faculty){
    this.get_faculty_details();
    this.faculty = true;
  }
  }
  get_faculty_details() {
    let arr = this.user_info['employeeGivenId'];
    let patt = new RegExp("[a-zA-z]*");
    let res = patt.exec(arr);
    this.deptName =res[0];
    this.analyticsService.get_dept_faculty(this.deptName).subscribe(res => {
      let result = res['res'];
      for (let r of result) {
        this.facultyNames.push([r['name']])
      }
    })
  }
  // HOD ENDS 




}
