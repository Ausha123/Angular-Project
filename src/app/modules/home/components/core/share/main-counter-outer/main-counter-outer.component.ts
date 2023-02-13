import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-counter-outer',
  templateUrl: './main-counter-outer.component.html',
  styleUrls: ['./main-counter-outer.component.scss']
})
export class MainCounterOuterComponent implements OnInit {

  happyCustomerCount: number = 0;
  projectsCount: number = 0;
  developersCount: number = 0;
  countriesCount: number = 0;

  projectCountStop: any = setInterval(() => {
    this.projectsCount++;
    if (this.projectsCount===40){
      clearInterval(this.projectCountStop);
    }
  },10)
  customerCountStop: any = setInterval(() => {
    this.happyCustomerCount++;
    if (this.happyCustomerCount===35){
      clearInterval(this.customerCountStop);
    }
  },10)
  developerCountStop: any = setInterval(() => {
    this.developersCount++;
    if (this.developersCount===50){
      clearInterval(this.developerCountStop);
    }
  },10)
  countriesCountStop: any = setInterval(() => {
    this.countriesCount++;
    if (this.countriesCount===56){
      clearInterval(this.countriesCountStop);
    }
  },10)

  constructor() {

  }

  ngOnInit(): void {
  }
}
