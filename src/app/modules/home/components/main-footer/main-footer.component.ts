import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SubscriberService} from "../../../share/service/core/subscriber.service";
import {CommonSnackBarServiceService} from "../../../share/service/core/common-snack-bar-service.service";
import {LoadingService} from "../../../share/service/core/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
  subscriberForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.minLength(3), Validators.maxLength(100), Validators.required])
  })

  constructor(private router: Router, private commonSnackBarServiceService: CommonSnackBarServiceService, public loadingService: LoadingService, private subscriberService: SubscriberService) {
  }

  ngOnInit(): void {
  }

  mainButtonLoadingState: boolean = true;
  errorState: boolean = false;
  errorMessage: string = 'Something went wrong! please try again shortly.';
  year: any = new Date().getFullYear();

  callCenter() {
    window.open('tel:+91123456789', '_system')
  }

  emailCenter() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@edealers.lk.com&su=Regarding Application Development&tf=1', '_system')
  }

  subscribeEmail(formDirective: any) {
    let email = this.subscriberForm.get('email')?.value;
    this.subscriberForm.reset(); // Reset form data
    formDirective.resetForm(); // Reset the ugly validators
    this.mainButtonLoadingState = false;
    this.errorState = false;
    this.subscriberService.subscribeEmail(
      email,
    ).subscribe(response => {
      this.mainButtonLoadingState = true;
      this.openSnackBar('Thank You!', 'close')
    }, error => {
      this.errorState = true;
      this.subscriberForm.patchValue({
        email
      })
      this.mainButtonLoadingState = true;
      if (error.status === 409) {
        this.errorMessage = 'Already you have Subscribed with this Email!'
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.commonSnackBarServiceService.trigger(message, action, [
      10000, 'success-snack-bar-common',
      'end',
      'top'
    ]);
  }

  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // navigateToPage(link: string) {
  //   this.router.navigate([link]).then(resp => {
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }

  navigateToPage(link: string) {
    this.router.navigate([link]).then(resp => {
    }).catch(error => {
      console.log(error)
    });
  }
}
