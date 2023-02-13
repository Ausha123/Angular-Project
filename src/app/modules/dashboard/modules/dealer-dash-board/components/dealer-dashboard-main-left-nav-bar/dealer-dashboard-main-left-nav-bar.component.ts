import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-dealer-dashboard-main-left-nav-bar',
  templateUrl: './dealer-dashboard-main-left-nav-bar.component.html',
  styleUrls: ['./dealer-dashboard-main-left-nav-bar.component.scss']
})
export class DealerDashboardMainLeftNavBarComponent implements OnInit {
  version = environment.version;
  @Output()
  slideEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToRoute(link: string) {
    this.router.navigate(['/dashboard/dealer/' + link])
      .then(() => {
        this.slide();
      }, error => {
        this.slide();
      })
  }

  slide() {
    this.slideEmitter.emit();
  }

  navigateToUniqueRoute(link: string) {
    this.router.navigate([link])
      .then(() => {
        this.slide();
      }, error => {
        this.slide();
      })
  }


}
