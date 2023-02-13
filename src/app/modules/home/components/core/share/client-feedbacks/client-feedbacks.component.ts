import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-feedbacks',
  templateUrl: './client-feedbacks.component.html',
  styleUrls: ['./client-feedbacks.component.scss']
})
export class ClientFeedbacksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  myCarouselOptions = {
    items: 5,
    dots: true,
    nav: true,
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

  items = [
    '',
    '',
    '',
    '',
    ''
  ];
}
