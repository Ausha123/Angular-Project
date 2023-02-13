import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonSnackBarServiceService} from "../../../../../share/service/core/common-snack-bar-service.service";
import {TokenService} from "../../../../../share/service/local/token.service";
import {UserService} from "../../../../../share/service/user.service";
import {LoadingService} from "../../../../../share/service/core/loading.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  btnColour = '#34495e';
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
  invalidState: boolean = false;
  errorMessage = '';

  constructor(private _router: Router, private commonSnackBarService: CommonSnackBarServiceService, private _location: Location, private tokenService: TokenService, private _userService: UserService, public loadingService: LoadingService) {

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  passwordState = true;

  login() {
    this.invalidState = false;

    if (this.loginForm.invalid) {
      this.invalidState = true;
      this.errorMessage = 'Please insert all required details';
      return;
    }
    this._userService.login(
      this.loginForm.get('email')?.value.toString().trim(),
      this.loginForm.get('password')?.value.toString().trim()
    ).subscribe(response => {
      console.log(response);
      if (response.code === 200) {
        this.tokenService.createDashBoardToken(response.data.jwtToken);
        this.openSnackBar('Welcome Back', 'Close');
        this._router.navigate(['/dashboard/loading-admin-panel']);
      }
    }, error => {
      if (error.status === 405) {
        this.invalidState = true;
        this.errorMessage = error.error.message;
        this.openSnackBar(error.error.message, 'Close');
      } else if (error.status === 406) {
        this.openSnackBar('This user account is not verified! please verify your email.', 'Close');
        this._router.navigate(['/home/auth/request-user-verification-token'])
      } else if (error.status === 423) {
        this.invalidState = true;
        this.errorMessage = 'This user account has been blocked! please Contact us.';
      } else if (error.status === 404) {
        this.invalidState = true;
        this.errorMessage = 'We Can\'t Find any records with this email';
      } else {
        this.invalidState = true;
        this.errorMessage = 'User Name or Password is incorrect!';
      }
    })
  }

  private navigateToPrevious() {
    this._location.back();
  }

  openSnackBar(message: string, action: string) {
    this.commonSnackBarService.trigger(message, action, [
      10000, 'success-snack-bar-common',
      'end',
      'top'
    ]);
  }
}
