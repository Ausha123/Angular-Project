import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-dealer-dash-board',
  templateUrl: './dealer-dash-board.component.html',
  styleUrls: ['./dealer-dash-board.component.scss'],
  animations: [
    trigger('navSlider', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.2s')
      ]),
      transition('* => void', [
        animate('0.2s', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]

})
export class DealerDashBoardComponent implements OnInit {

  year: any= new Date().getFullYear();
  slideType: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  slide() {
    this.slideType = !this.slideType;
  }
}
