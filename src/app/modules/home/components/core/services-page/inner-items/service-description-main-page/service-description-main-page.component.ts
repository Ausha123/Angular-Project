import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-description-main-page',
  templateUrl: './service-description-main-page.component.html',
  styleUrls: ['./service-description-main-page.component.scss']
})
export class ServiceDescriptionMainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToYoutube(link: string) {
      window.open(link, '_system')
  }
}
