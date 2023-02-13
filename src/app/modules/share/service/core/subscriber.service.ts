import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  private baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  subscribeEmail(
    email: string
  ): Observable<any> {
    return this._http.post(this.baseUrl + 'subscriber/user/subscribe',
      {
        email: email,
        state_type: true,
        other_data: []
      }, {
        headers: {Progress_Type: 'BUTTON'}
      });
  }

  sendMessage(
    email: string,
    name: string,
    subject: string,
    message: string,
  ): Observable<any> {
    return this._http.post(this.baseUrl + 'message/user/send',
      {
        email: email,
        message: message,
        name: name,
        subject: subject,
        otherData:[]
      }, {
        headers: {Progress_Type: 'SPINNER'}
      });
  }
}
