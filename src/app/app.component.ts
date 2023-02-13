import {Component, OnInit} from '@angular/core';
import {CoreService} from "./modules/share/service/core/core.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  deviceInfo: any = null;

  constructor(private coreService: CoreService) {
  }

  title = 'EDealers';

  getLocation(): void {
    fetch('https://api.ipregistry.co/?key=elfr1074g71uvawf')
      .then(function (response) {
        return response.json();
      })
      .then(payload => {
        console.log(payload)
        let userData = {
          date: new Date(),
          carrier: [payload?.carrier],
          company: [payload?.company],
          connection: [payload?.connection],
          currency: [payload?.currency],
          location: [payload?.location],
          timeZone: [payload?.time_zone],
          userAgent: [payload?.user_agent],
          otherData: []
        }
        this.coreService.saveVisitorData(userData).subscribe(response => {

        });
      });
  }

  ngOnInit(): void {
    //this.getLocation();
  }
}
