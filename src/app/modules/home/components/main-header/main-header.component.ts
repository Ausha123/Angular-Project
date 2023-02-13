import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
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
export class MainHeaderComponent implements OnInit {
  navSliderState = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  manageNavBar() {
    this.navSliderState = !this.navSliderState;
  }
}
