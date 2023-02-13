import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../local/token.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  private baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient, private tokenService: TokenService) {
  }


  public authenticateDealerForAccess(): Observable<any> {
    return this._http.post(this.baseUrl + 'dealer/authenticate-dealer-for-access', {}, {
      headers: {Progress_Type: 'SPINNER'}
    })
  }
}
