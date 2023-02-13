import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-make-money-with-us-main-slider',
  templateUrl: './make-money-with-us-main-slider.component.html',
  styleUrls: ['./make-money-with-us-main-slider.component.scss']
})
export class MakeMoneyWithUsMainSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  advertisements: any[] = [
    'https://firebasestorage.googleapis.com/v0/b/seekerscloud-official-website.appspot.com/o/home-page%2Fslider-Images%2Fmain-bg-2.jpg?alt=media&token=fc6d47c5-877f-4fd3-bb51-c0e851d06c64',
    'https://firebasestorage.googleapis.com/v0/b/seekerscloud-official-website.appspot.com/o/home-page%2Fslider-Images%2Fmain-bg-3.jpg?alt=media&token=257b35cc-4c7f-450f-93c1-facc53ad27c5',
  ];

  customOptions: OwlOptions = {
    animateOut: 'fadeOut',
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1,
        nav: false
      },
      576: {
        items: 1,
        nav: true
      },
      780: {
        items: 1,
        nav: true
      },
      1018: {
        items: 1,
        nav: true
      },
      1326: {
        items: 1,
        nav: true
      },
      1636: {
        items: 1,
        nav: true
      },
      2560: {
        items: 1,
        nav: true
      }
    },
    nav: false
  };

}
