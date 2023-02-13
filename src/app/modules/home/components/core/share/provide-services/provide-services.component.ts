import {Component, OnInit, Pipe} from '@angular/core';
import ProvideServicesDataSource from "../../../../../share/data/local/ProvideServicesDataSource";

@Component({
  selector: 'app-provide-services',
  templateUrl: './provide-services.component.html',
  styleUrls: ['./provide-services.component.scss']
})
export class ProvideServicesComponent implements OnInit{

  servicesWeProvide:Array<any>=new ProvideServicesDataSource().getAllData();

  myCarouselOptions = {
    items: 5,
    dots: false,
    nav: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true
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
        items: 7,
        nav: true
      },
      1200: {
        items: 7,
        nav: true
      },
      1440: {
        items: 7,
        nav: true
      },
      1636: {
        items: 7,
        nav: true
      },
      2560: {
        items: 7,
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
