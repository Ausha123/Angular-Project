import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-track',
  templateUrl: './project-track.component.html',
  styleUrls: ['./project-track.component.scss']
})
export class ProjectTrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
