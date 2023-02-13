import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-what-do-we-do-marketing',
  templateUrl: './what-do-we-do-marketing.component.html',
  styleUrls: ['./what-do-we-do-marketing.component.scss']
})
export class WhatDoWeDoMarketingComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToYoutube(link: string) {
    window.open(link, '_system')
  }
}
