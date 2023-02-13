import { Component, OnInit } from '@angular/core';
import MainBenefitsDataSource from "../../../../../../share/data/local/MainBenefitsDataSource";
import MainBenefitsDTO from "../../../../../../share/dto/core/MainBenefitsDTO";

@Component({
  selector: 'app-main-benefits',
  templateUrl: './main-benefits.component.html',
  styleUrls: ['./main-benefits.component.scss']
})
export class MainBenefitsComponent implements OnInit {


  myCarouselOptions = {
    items: 5,
    dots: true,
    nav: true,
    navText: "",
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      500: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: true
      },
      730: {
        items: 2,
        nav: true
      },
      1018: {
        items: 3,
        nav: true
      },
      1326: {
        items: 3,
        nav: true
      },
      1200: {
        items: 3,
        nav: true
      },
      1440: {
        items: 3,
        nav: true
      },
      1636: {
        items: 3,
        nav: true
      },
      2560: {
        items: 1,
        nav: true
      }
    }
  };

  dataSet:Array<MainBenefitsDTO> = new MainBenefitsDataSource().getAllData();

  constructor() { }

  ngOnInit(): void {
  }

}
