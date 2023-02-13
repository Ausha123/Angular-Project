import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-selected-form',
  templateUrl: './registration-selected-form.component.html',
  styleUrls: ['./registration-selected-form.component.scss']
})
export class RegistrationSelectedFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToRegister(type:string) {
    if (type==='Dealer'){
      this.router.navigate(['/home/dealer-registration']);
    }else{
      this.router.navigate(['/home/developer-registration']);
    }
  }
}
