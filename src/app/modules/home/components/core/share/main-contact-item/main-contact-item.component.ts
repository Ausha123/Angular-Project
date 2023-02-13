import {Component, OnInit} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-main-contact-item',
  templateUrl: './main-contact-item.component.html',
  styleUrls: ['./main-contact-item.component.scss']
})
export class MainContactItemComponent implements OnInit {

  constructor(private facebookService: FacebookService) {
  }

  ngOnInit(): void {

  }

  redirectToCall() {
    window.open('tel:+94714856728', '_system')
  }

  redirectToEmail() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kavinduhasintha9@gmail.com.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com&tf=1', '_system')
  }

  redirectToMessenger(): void {
    const initParams: InitParams = {xfbml: true, version: 'v3.2'};
    this.facebookService.init(initParams);
  }

  redirectToWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=0714911257', '_system')
  }

  redirectToViber() {
    window.open('viber://chat?number=0714856728', '_system')

  }

  redirectToTelegram() {
    window.open('https://t.me/+94714856728', '_system')
  }
}
