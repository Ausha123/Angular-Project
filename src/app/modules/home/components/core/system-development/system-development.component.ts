import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-development',
  templateUrl: './system-development.component.html',
  styleUrls: ['./system-development.component.scss']
})
export class SystemDevelopmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
