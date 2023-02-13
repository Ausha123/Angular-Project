import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() {
  }

  public createDashBoardToken(data: any) {
    const now = new Date(new Date().getTime() + 60 * 60 * 24 * 1000 - 1);
    const item = {
      value: data,
      expiry: now.getTime(),
    }
    this.removeDashBoardToken();
    localStorage.setItem('EDealersDashBoardToken', JSON.stringify(item));
  }
  public removeDashBoardToken() {
    localStorage.removeItem('EDealersDashBoardToken');
  }
  public isDashboardSessionDataAvailable(): boolean {
    return localStorage.getItem('EDealersDashBoardToken') ? true : false;
  }
  public async isDashBoardTokenAvailable(): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      if (this.isDashboardSessionDataAvailable()) {
        resolve(true);
      } else {
        reject(false);
      }
    })
  }

  getAuthDashboardToken(): string {
    let parse = localStorage.getItem('EDealersDashBoardToken');
    if (parse) {
      let value=JSON.parse(parse).value;
      if (value===null || value===undefined){
        console.log(value)
        return '';
      }
      return 'Bearer '+value;
    }
    return '';
  }
}
