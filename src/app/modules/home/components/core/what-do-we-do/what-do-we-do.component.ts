import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-do-we-do',
  templateUrl: './what-do-we-do.component.html',
  styleUrls: ['./what-do-we-do.component.scss']
})
export class WhatDoWeDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
