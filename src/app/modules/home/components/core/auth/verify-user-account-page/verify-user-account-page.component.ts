import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommonSnackBarServiceService} from "../../../../../share/service/core/common-snack-bar-service.service";
import {Location} from "@angular/common";
import {TokenService} from "../../../../../share/service/local/token.service";
import {UserService} from "../../../../../share/service/user.service";
import {LoadingService} from "../../../../../share/service/core/loading.service";

@Component({
  selector: 'app-verify-user-account-page',
  templateUrl: './verify-user-account-page.component.html',
  styleUrls: ['./verify-user-account-page.component.scss']
})
export class VerifyUserAccountPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private commonSnackBarService: CommonSnackBarServiceService, private _location: Location, private tokenService: TokenService, private _userService: UserService, public loadingService: LoadingService) {
  }

  token: string | undefined | null = '';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      this.token = data.get('token');
      if (this.token) {
        this.verifyAccount();
      } else {
        alert('error!');
      }
    })
  }

  invalidState = false;
  errorMessage = "";

  private verifyAccount() {
    this.invalidState = false;
    this._userService.verifyDefaultSystemUserAccount(this.token).subscribe(response => {
      if (response.code === 201) {
        this.openSnackBar('Your Account is Activated now!', 'Close');
        this._router.navigate(['/home/auth/login']);
        return;
      }
    }, error => {
        this.invalidState = true;
        this.errorMessage = 'Something went wring! please try again shortly!';
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
