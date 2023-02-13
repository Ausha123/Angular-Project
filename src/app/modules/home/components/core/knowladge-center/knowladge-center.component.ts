import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowladge-center',
  templateUrl: './knowladge-center.component.html',
  styleUrls: ['./knowladge-center.component.scss']
})
export class KnowladgeCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
