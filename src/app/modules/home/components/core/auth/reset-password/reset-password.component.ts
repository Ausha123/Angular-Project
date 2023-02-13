import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonSnackBarServiceService} from "../../../../../share/service/core/common-snack-bar-service.service";
import {Location} from "@angular/common";
import {TokenService} from "../../../../../share/service/local/token.service";
import {UserService} from "../../../../../share/service/user.service";
import {LoadingService} from "../../../../../share/service/core/loading.service";
import {debounceTime, map} from "rxjs";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {


  passwordForm = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
    rePassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
  })
  invalidState: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private commonSnackBarService: CommonSnackBarServiceService, private _location: Location, private tokenService: TokenService, private _userService: UserService, public loadingService: LoadingService) {
  }

  errorMessage = '';
  errorMessage2State = false;
  errorMessage2FormState = true;
  errorMessage2 = 'Please make sure your passwords match.';
  hide = true;
  token: string | undefined | null = '';

  ngOnInit(): void {
    window.scroll(0, 0);

    this.activatedRoute.paramMap.subscribe(data => {
      this.token = data.get('token');
    })

    /* //---------------------------------- Password Validation -----------------

     this.passwordForm.valueChanges
       .pipe(debounceTime(500))
       .subscribe(() => {
         this.errorMessage2State = false;
         this.errorMessage2FormState = true;
         if (this.passwordForm.get('password')?.value !== this.passwordForm.get('rePassword')?.value) {
           if (this.passwordForm.get('rePassword')?.touched) {
             this.errorMessage2FormState = true;
             this.errorMessage2State = true;
           }
         } else {
           this.errorMessage2FormState = false;
           this.errorMessage2State = false;
         }
       });

     //---------------------------------- Password Validation -----------------
   }*/
  }

  resetPassword() {

    if (!this.token) {
      this.openErrorSnackBar('Please find your password reset token from the email. and try again', 'close');
      return;
    }

    if (this.passwordForm.get('password')?.value.toString().trim() !==
      this.passwordForm.get('rePassword')?.value.toString().trim()) {
      this.errorMessage2State = true;
      this.errorMessage2 = 'Please make sure your passwords match.';
      return;
    }

    this.invalidState = false;
    this._userService.resetPassword(
      this.passwordForm.get('password')?.value.toString().trim(), this.token
    ).subscribe(response => {
      if (response.code === 201) {
        this.openSnackBar('we have reset your password, please sign in', 'Close');
        this.tokenService.removeDashBoardToken();
        this._router.navigate(['/home/auth/login']);
      }
    }, error => {
      this.invalidState = true;
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

  openErrorSnackBar(message: string, action: string) {
    this.commonSnackBarService.trigger(message, action, [
      10000, 'warning-snack-bar-common',
      'end',
      'top'
    ]);
  }

}
