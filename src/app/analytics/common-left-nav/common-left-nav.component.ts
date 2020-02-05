import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
declare var $: any;
@Component({
  selector: 'app-common-left-nav',
  templateUrl: './common-left-nav.component.html',
  styleUrls: ['./common-left-nav.component.css']
})
export class CommonLeftNavComponent implements OnInit {
  currentRole: string;
  selectedIndex: number;
  constructor(private router: Router, private appComponent: AppComponent) {

  }

  ngOnInit() {

  }
  navigate(url) {
  }

  routeUtil() {
    this.router.events.subscribe(function (s) {
      let flag: boolean;
      if (s instanceof NavigationEnd) {
        this.activeUrl = s.urlAfterRedirects;
        $('.sidebar-list').removeClass('active');
        $('.side-link').removeClass('active');
        $('.tree-link').removeClass('active');
        let urlsFragments: string[] = this.activeUrl.split('/');
        for (let i = 1; i < urlsFragments.length; i++) {

          if (/^[a-zA-Z0-9]*$/.test(urlsFragments[i]) === true) {
            let stringValue = urlsFragments[i];
            $('.' + stringValue).addClass('active');

          }
        }
      }
    });

  }

  testScreenNavigator(path) {
  }
  conductTestNavigator(path) {
  }

  active(index) {
    this.selectedIndex = index
    console.log("index", index)
    $('.treeview-menu li').on('click', function () {
      $(this).siblings().removeClass('active')
      $(this).addClass('active');
    })
  }
}
