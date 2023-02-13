import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-developer-registration',
  templateUrl: './developer-registration.component.html',
  styleUrls: ['./developer-registration.component.scss']
})
export class DeveloperRegistrationComponent implements OnInit {

  emailArray: Array<string> = [];
  webLinkArray: Array<string> = [];
  socialLinkArray: Array<string> = [];
  contactArray: Array<string> = [];

  // toppings = new FormControl();

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
  }

  addEmail(event: MatChipInputEvent): void {
    const email = (event.value || '').trim();
    // const webLink = (event.value || '').trim();
    // const socialMedia = (event.value || '').trim();

    if (email) {
      const index = this.emailArray.indexOf(event.value);
      if (index >= 0) {
      } else {
        this.emailArray.push(email);
      }
    }
    // if (webLink) {
    //   const index = this.webLinkArray.indexOf(event.value);
    //   if (index >= 0) {
    //   } else {
    //     this.webLinkArray.push(webLink);
    //   }
    // }
    // if (socialMedia) {
    //   const index = this.socialLinkArray.indexOf(event.value);
    //   if (index >= 0) {
    //   } else {
    //     this.socialLinkArray.push(socialMedia);
    //   }
    // }

    event.chipInput!.clear();
  }

  addWebLink(event: MatChipInputEvent): void {
    const webLink = (event.value || '').trim();
    // const socialMedia = (event.value || '').trim();


    if (webLink) {
      const index = this.webLinkArray.indexOf(event.value);
      if (index >= 0) {
      } else {
        this.webLinkArray.push(webLink);
      }
    }

    event.chipInput!.clear();
  }

  addSocialLink(event: MatChipInputEvent): void {
    const socialMedia = (event.value || '').trim();


    if (socialMedia) {
      const index = this.socialLinkArray.indexOf(event.value);
      if (index >= 0) {
      } else {
        this.socialLinkArray.push(socialMedia);
      }
    }

    event.chipInput!.clear();
  }

  addContact(event: MatChipInputEvent): void {
    const contact = (event.value || '').trim();


    if (contact) {
      const index = this.contactArray.indexOf(event.value);
      if (index >= 0) {
      } else {
        this.contactArray.push(contact);
      }
    }

    event.chipInput!.clear();
  }

  removeEmail(keyWord: string): void {
    const email = this.emailArray.indexOf(keyWord);

    if (email >= 0) {
      this.emailArray.splice(email, 1);
    }
  }

  removeWebLink(keyWord: string): void {
    const webLink = this.webLinkArray.indexOf(keyWord);

    if (webLink >= 0) {
      this.webLinkArray.splice(webLink, 1);
    }
  }

  removeSocialLink(keyWord: string): void {
    const socialLink = this.socialLinkArray.indexOf(keyWord);

    if (socialLink >= 0) {
      this.socialLinkArray.splice(socialLink, 1);
    }
  }

  removeContact(keyWord: string): void {
    const contact = this.contactArray.indexOf(keyWord);

    if (contact >= 0) {
      this.contactArray.splice(contact, 1);
    }
  }

  ngOnInit(): void {
  }

}
