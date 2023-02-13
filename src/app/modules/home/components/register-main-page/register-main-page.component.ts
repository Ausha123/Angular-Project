import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register-main-page',
  templateUrl: './register-main-page.component.html',
  styleUrls: ['./register-main-page.component.scss']
})
export class RegisterMainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
