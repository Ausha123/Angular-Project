import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonSnackBarServiceService} from "../../../../../share/service/core/common-snack-bar-service.service";
import {Location} from "@angular/common";
import {TokenService} from "../../../../../share/service/local/token.service";
import {UserService} from "../../../../../share/service/user.service";
import {LoadingService} from "../../../../../share/service/core/loading.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  btnColour = '#34495e';
  loginForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  })
  invalidState: boolean = false;
  errorMessage = '';
  passwordState = true;

  constructor(private _router: Router, private commonSnackBarService: CommonSnackBarServiceService, private _location: Location, private tokenService: TokenService, private _userService: UserService, public loadingService: LoadingService) {

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  signUp() {
    this.invalidState = false;

    if (this.loginForm.invalid) {
      this.invalidState = true;
      this.errorMessage = 'Please insert all required details';
      return;
    }
    if (this.loginForm.get('password')?.value !== this.loginForm.get('confirmPassword')?.value) {
      this.invalidState = true;
      this.errorMessage = 'The password confirm dose ot match!';
      return;
    }

    const obj = {
      firstName: this.loginForm.get('firstName')?.value,
      lastName: this.loginForm.get('lastName')?.value,
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
      registeredDate: new Date()
    }

    this._userService.signup(obj).subscribe(response => {
      if (response.code === 201) {
        this.openSnackBar('Registration Successful please verify the account', 'Close');
        this._router.navigate(['/home/auth/signup-confirmation']);
        return;
      }
      this.invalidState = true;
      this.errorMessage = 'Something went wring! please try again shortly!';
    }, error => {
      if (error.status === 409) {
        this.invalidState = true;
        this.errorMessage = 'This email is already exists, please register with an another email or login';
      } else {
        this.invalidState = true;
        this.errorMessage = 'Something went wring! please try again shortly!';
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
