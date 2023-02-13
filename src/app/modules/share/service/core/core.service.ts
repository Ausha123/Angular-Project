import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "../local/token.service";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient, private tokenService: TokenService) {
  }

  public isAvailableForDashboard(): Observable<any> {
    return this._http.post(this.baseUrl + 'system-user/user/is-available-for-dashboard', {}, {
      headers: {Progress_Type: 'SPINNER'}
    })
  }

  public saveVisitorData(dto: any): Observable<any> {
    return this._http.post(this.baseUrl + 'visitor/create', {
      date: dto.date,
      carrier: dto.carrier,
      company: dto.company,
      connection: dto.connection,
      currency: dto.currency,
      location: dto.location,
      timeZone: dto.timeZone,
      userAgent: dto.userAgent,
      otherData: dto.otherData
    }, {
      headers: {Progress_Type: 'NON'}
    })
  }
}
