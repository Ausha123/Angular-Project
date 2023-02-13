import { Component, OnInit } from '@angular/core';
import MainBenefitsDTO from "../../../../../../share/dto/core/MainBenefitsDTO";
import MainBenefitsDataSource from "../../../../../../share/data/local/MainBenefitsDataSource";

@Component({
  selector: 'app-overview-my-page',
  templateUrl: './overview-my-page.component.html',
  styleUrls: ['./overview-my-page.component.scss']
})
export class OverviewMyPageComponent implements OnInit {
  // dataSet:Array<MainBenefitsDTO> = new MainBenefitsDataSource().getAllData();
  myCarouselOptions = {
    items: 5,
    dots: false,
    nav: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },

      350: {
        items: 1,
        nav: false
      },
      392: {
        items: 1,
        nav: false
      },

      417: {
        items: 2,
        nav: false
      },
      604: {
        items: 3,
        nav: true
      },
      850: {
        items: 4,
        nav: true
      },
      993: {
        items: 4,
        nav: true
      },
      1018: {
        items: 5,
        nav: true
      },
      1326: {
        items: 5,
        nav: true
      },
      1200: {
        items: 5,
        nav: true
      },
      1440: {
        items: 5,
        nav: true
      },
      1636: {
        items:5,
        nav: true
      },
      2560: {
        items: 5,
        nav: true
      }
    }
  };

  items = [
    '',
    '',
    ''
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
