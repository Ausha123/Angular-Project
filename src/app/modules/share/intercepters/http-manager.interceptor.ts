import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {LoadingService} from "../service/core/loading.service";
import {TokenService} from "../service/local/token.service";
import {Router} from "@angular/router";
import {CommonSnackBarServiceService} from "../service/core/common-snack-bar-service.service";

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {


  constructor(private commonSnackBarService: CommonSnackBarServiceService, private router: Router,private loaderService: LoadingService, private tokenService: TokenService) {
  }

  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getAuthDashboardToken();
    console.log(token);
    if (token) {
      request = request.clone({
        setHeaders: {Authorization: token}
      });
    }

    console.log(request.headers)
    if (request.headers.get('Progress_Type') === 'SPINNER') {
      this.loaderService.mainSpinnerLoading.next(true);
    }
    if (request.headers.get('Progress_Type') === 'BAR') {
      this.loaderService.mainBarLoading.next(true);
    }
    if (request.headers.get('Progress_Type') === 'BUTTON') {
      this.loaderService.mainButtonLoading.next(true);
    }
    return next.handle(request).pipe(
      finalize(
        () => {
          this.loaderService.mainSpinnerLoading.next(false);
          this.loaderService.mainBarLoading.next(false);
          this.loaderService.mainButtonLoading.next(false);
        }
      ),
      catchError((error) => {
        if (error.status===401 || error.status===403){
          this.tokenService.removeDashBoardToken();
          this.router.navigate(['/home/auth/login']);
        }else if(error.status===409){
          this.openSnackBar(error.error.message,'Close',5000,'warning-snack-bar-common')
        }
        return throwError(error);
      })
    );
  }

  async getData(): Promise<any> {

  }

  openSnackBar(message: string, action: string,time:number,errorType:string) {
    this.commonSnackBarService.trigger(message, action, [
      time, errorType,
      'end',
      'top'
    ]);
  }
}
