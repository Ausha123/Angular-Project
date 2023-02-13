import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonSnackBarServiceService} from "../../../../../share/service/core/common-snack-bar-service.service";
import {Location} from "@angular/common";
import {TokenService} from "../../../../../share/service/local/token.service";
import {UserService} from "../../../../../share/service/user.service";
import {LoadingService} from "../../../../../share/service/core/loading.service";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {


  resetForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required])
  })
  invalidState: boolean = false;

  constructor(private _router: Router, private commonSnackBarService: CommonSnackBarServiceService, private _location: Location, private tokenService: TokenService, private _userService: UserService, public loadingService: LoadingService) {

  }

  errorMessage = '';

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  sendEmail() {
    this.invalidState = false;
    this._userService.forgetPassword(
      this.resetForm.get('email')?.value.toString().trim()
    ).subscribe(response => {
      if (response.code === 200) {
        console.log(response);
        this.openSnackBar(response.message, 'Close');
         this._router.navigate(['/home/auth/forgot-password-success']);
      }
    }, error => {
      console.log(error);
      if (error.status === 404) {
        this.invalidState = true;
        this.errorMessage = error.error.data.message;
        return;
      }
      this.errorMessage = 'Something went wrong try again later.';
    })
  }

  openSnackBar(message: string, action: string) {
    this.commonSnackBarService.trigger(message, action, [
      10000, 'success-snack-bar-common',
      'end',
      'top'
    ]);
  }

}
