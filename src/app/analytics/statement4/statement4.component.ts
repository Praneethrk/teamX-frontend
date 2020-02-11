import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { AuthService } from 'src/app/auth/auth.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ChartSelectEvent } from 'ng2-google-charts';
import { templateSourceUrl, ThrowStmt } from '@angular/compiler';


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
  selectedEmp;
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
  userRole:String[] = [];
  userR:any;
  facultyId;;
  deptName: any;
  facultyNames: any[] = [];
  faculty: boolean = false;
  ueAvg;
  resul: String[] = []
  search;
  departments;
  selectedDepatment;
  selectedSubject;
  placementDetails;
  ueMarks;
  facultyName;
  constructor(private analyticsService: AnalyticsService, private authService: AuthService) { }

  ngOnInit() {
    this.search = "false"
    this.user_info = this.authService.getUserInfo()
    console.log(this.user_info)
    let arr = this.user_info["roles"];
    console.log(this.user_info)
    if (this.user_info["roles"] == "STUDENT") {
      this.userRole.push("STUDENT");
      this.userR = "STUDENT"
      this.get_academic_years();
      this.get_term_numbers();
      this.get_dept();
    }
    else if (arr[0] == "FACULTY" && arr[2] == "PRINCIPAL") {
      this.analyticsService.get_depts().subscribe(res => {
        this.departments = res["depts"]
      })
      this.userRole.push("PRINCIPAL");
      this.userR = "PRINCIPAL"
      this.get_academic_years();
      this.get_term_numbers();
    }
    else if (arr[2] == "HOD") {
      this.userRole.push("HOD");
      this.userR = "HOD"
      this.get_academic_years();
      this.get_term_numbers();
      // employeeGivenId
    }
    else if (arr[0] == "FACULTY") {
      this.userRole.push("FACULTY");
      this.userR = "FACULTY"
      this.get_academic_years();
      this.get_term_numbers();
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
  searchbuttonStud() {
    this.showSpinner = true;
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
    let arr = this.user_info["roles"];
    if (this.user_info["roles"] == "STUDENT") {
      this.showSpinner = false
      var chartwidth = $('#chartparent').width();
      this.title = 'Course-wise Performence %',
        this.firstLevelChart = {
          chartType: "ColumnChart",
          dataTable: data,

          options: {
            bar: { groupWidth: "13%" },
            height: $(window).height()*0.75,
            width: chartwidth,
            vAxis: {
              title: "Performance %",
              gridlines: { color: '#e0dbda', minSpacing: 50 },
            },
            hAxis: {
              title: "Courses",
              gridlines: { color: '#e0dbda', minSpacing: 50 },
            },
            chartArea: {
              width:chartwidth,
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

    } else {
      var chartwidth = $('#chartparent').width();
      this.showSpinner = false;
      this.chart_visibility = true;
      this.title = 'Course-wise UE Marks %',
        this.firstLevelChart = {
          chartType: "ComboChart",
          dataTable: data,
          
          options: {
            focusTarget: 'datum',
            bar: { groupWidth: "20%" },
            vAxis: {
              title: "Percentage",
              scaleType: 'linear',
              maxValue: '100',
              minValue: '0'
            },
            height: $(window).height()*0.75,
            width: chartwidth,
            hAxis: {
              title: "Courses",
              titleTextStyle: {
              }
            },
            chartArea: {
              width:chartwidth,
              left: 80,
              right: 100,
              top: 100,
            },
            legend: {
              position: "top",
              alignment: "end"
            },
            seriesType: "bars",
            colors: ["#d3ad5d", "#789d96"],
            fontName: "Times New Roman",
            fontSize: 13,
          }

        }

    }

  }

  //On chart select
  onChartSelect(event: ChartSelectEvent) {
    console.log(event.selectedRowValues)
    if (this.user_info["roles"] == "STUDENT") {
      this.array = event.selectedRowFormattedValues;
      this.modelcourse = this.array[0];
      this.modelScore = this.array[1];
    } else {
      this.array = event.selectedRowFormattedValues;
      this.selectedSubject = event.selectedRowValues[0]
        this.analyticsService.get_faculty_stud_ue(this.selectedEmp, this.academicYears, this.terms).subscribe(res => {
          let result = res["res"]
          this.ueMarks = this.array[1]
        },
        err=>{},
        ()=>{
          this.analyticsService.get_faculty_stud_placement(this.selectedEmp,this.terms,this.selectedSubject).subscribe(res=>{
            this.placementDetails = [res['totalStudents'], res['placedStudents'], res['totalPositions']]
          },
          err=>{},
          ()=>{
            // $('#iaMarks').modal('toggle')
          }
          )
        }
        )
    }
  }
  // STUDENT ENDS



  getFacultyId(empId,empName) {
    this.facultyId = empId
    this.facultyName = empName
    console.log(empId);
    this.get_faculty_stud_ue(this.facultyId);
  }

  searchbutton() {
    if (this.userR == "FACULTY") {
      this.get_faculty_stud_ue(this.user_info['employeeGivenId']);
    } else {
      this.get_faculty_details();
      if (this.search) {
        this.get_faculty_stud_ue(this.facultyId);
      }
      this.search = "true"
    }


  }
  get_faculty_details() {
    if (this.userR == "FACULTY" ||this.userR == "HOD") {
      let arr = this.user_info['employeeGivenId'];
      let patt = new RegExp("[a-zA-z]*");
      let res = patt.exec(arr);
      this.deptName = res[0];
    }
    else {
      this.deptName = this.selectedDepatment;
    }
    this.analyticsService.get_dept_faculty(this.deptName).subscribe(res => {
      this.resul = res['res'];
    })
  }
  get_faculty_stud_ue(facultyId) {
    this.getEmpChart(facultyId);
  }

  getEmpChart(empid) {
    this.selectedEmp = empid
    this.showSpinner = true;
    this.chart_visibility = false;
    let subs;
    let data = [["Subject Name", "UE Performance", "Placement"]]
    this.analyticsService.get_faculty_stud_ue(this.selectedEmp, this.academicYears, this.terms).subscribe(res => {
      subs = res['res'];
    },
      err => { },
      () => {

        for (let s of subs) {
          data.push([s['course'], s['uePercentage'], s['placePercentage']])
        }
        if (data.length > 1) {
          this.graph_data(data)
          this.error_flag = false
        }
        else {
          this.showSpinner = false
          this.error_flag = true
        }
      })
  }

  // HOD ENDS 




}
