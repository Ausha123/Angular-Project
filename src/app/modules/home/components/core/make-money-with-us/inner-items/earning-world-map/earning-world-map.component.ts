import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earning-world-map',
  templateUrl: './earning-world-map.component.html',
  styleUrls: ['./earning-world-map.component.scss']
})
export class EarningWorldMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navigateToYoutube(link: string) {
    window.open(link, '_system');
  }
}
