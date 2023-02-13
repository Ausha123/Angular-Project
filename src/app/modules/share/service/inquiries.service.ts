import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  private baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  makeInquiry(
    email: string,
    name: string,
    contact: string,
    country: any,
    applicationType: string,
    type:string
  ): Observable<any> {
    return this._http.post(this.baseUrl + 'inquiry/user/create',
      {
        email: email,
        name: name,
        contact: [contact],
        country: country,
        placeDate: new Date(),
        programType: applicationType,
        inquiryMessage: '',
        otherData: [],
      }, {
        headers: {Progress_Type: type}
      });
  }
}
