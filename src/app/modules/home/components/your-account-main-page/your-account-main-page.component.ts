import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-your-account-main-page',
  templateUrl: './your-account-main-page.component.html',
  styleUrls: ['./your-account-main-page.component.scss']
})
export class YourAccountMainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToConfigure(link: string) {
    this.router.navigate([link]);
  }
}
