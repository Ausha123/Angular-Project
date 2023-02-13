import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this._http.post(this.baseUrl + 'system-user/user/authenticate', {
        userName: email,
        password: password
      },
      {
        headers: {Progress_Type: 'SPINNER'}
      });
  }

  signup(data: any): Observable<any> {
    return this._http.post(this.baseUrl + 'system-user/user/create', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        registeredDate: data.registeredDate,
        avatar: '',
        otherData: []
      },
      {
        headers: {Progress_Type: 'SPINNER'}
      });
  }

  forgetPassword(email: string): Observable<any> {
    return this._http.post(this.baseUrl + 'system-user/user/forgot-password?email=' + email, {},
      {
        headers: {Progress_Type: 'SPINNER'}
      });
  }

  resetPassword(password: string, token: string): Observable<any> {
    return this._http.post(this.baseUrl + 'system-user/user/reset-password', {
        password: password,
        token: token
      },
      {
        headers: {Progress_Type: 'SPINNER'}
      });
  }



  verifyDefaultSystemUserAccount(token: any): Observable<any> {
    return this._http.post(this.baseUrl + 'system-user/user/verify-new-account?token=' + token, {});
  }
}
