import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-how-can-you-earn',
  templateUrl: './how-can-you-earn.component.html',
  styleUrls: ['./how-can-you-earn.component.scss']
})
export class HowCanYouEarnComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToYoutube(link: string) {
    window.open(link, '_system');
  }
}
