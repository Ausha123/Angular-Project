import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  registerDealer(
    obj: any
  ): Observable<any> {
    console.log(obj.address)
    return this._http.post(this.baseUrl + 'dealer/user/create',
      {
        contactEmails: obj.contactEmails,
        contactNumbers: obj.contactNumbers,
        fullName: obj.fullName,
        nic: obj.nic,
        gender: obj.gender,
        littleAbout: obj.littleAbout,
        address: [obj.address],
        otherDetails: [],
        avatar:'',
        registerDate:new Date(),
      }, {
        headers: {Progress_Type: 'SPINNER'}
      });
  }
}
