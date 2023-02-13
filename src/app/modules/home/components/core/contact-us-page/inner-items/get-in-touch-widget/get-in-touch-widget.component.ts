import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SubscriberService} from "../../../../../../share/service/core/subscriber.service";
import {CommonSnackBarServiceService} from "../../../../../../share/service/core/common-snack-bar-service.service";
import {Location} from "@angular/common";
import {TokenService} from "../../../../../../share/service/local/token.service";
import {UserService} from "../../../../../../share/service/user.service";
import {LoadingService} from "../../../../../../share/service/core/loading.service";

@Component({
  selector: 'app-get-in-touch-widget',
  templateUrl: './get-in-touch-widget.component.html',
  styleUrls: ['./get-in-touch-widget.component.scss']
})
export class GetInTouchWidgetComponent implements OnInit {

  form = new FormGroup({
    message: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
    email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.email]),
    subject: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)])
  })

  constructor(private commonSnackBarService: CommonSnackBarServiceService, public loadingService: LoadingService, private subscriberService: SubscriberService) {

  }

  ngOnInit(): void {
  }

  callCenter() {
    window.open('tel:+94713086509', '_system')
  }

  emailCenter() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=edealers.info@gmail.com&su=Regarding Application Development&tf=1', '_system')
  }

  invalidState: boolean = false;
  errorMessage = '';

  saveData(formDirective: FormGroupDirective) {
    this.invalidState = false;
    console.log(this.form)
    if (this.form.invalid){
      this.invalidState = true;
      this.errorMessage = 'All the fields are required!';
      return;
    }

    this.subscriberService.sendMessage(
      this.form.get('email')?.value,
      this.form.get('name')?.value,
      this.form.get('subject')?.value,
      this.form.get('message')?.value
    ).subscribe(response => {
      formDirective.resetForm(); // Reset the ugly validators
      if (response.code===201) {
        this.openSnackBar(`Hello there, we will contact you immediately!`, 'Close');
        return;
      }
      this.invalidState = true;
      this.errorMessage = 'Something went wrong, please try again!';
    }, error => {
        this.invalidState = true;
        this.errorMessage = 'Something went wrong, please try again!';
    });
  }

  openSnackBar(message: string, action: string) {
    this.commonSnackBarService.trigger(message, action, [
      10000, 'success-snack-bar-common',
      'end',
      'top'
    ]);
  }
}
