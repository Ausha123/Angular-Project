import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from "../service/local/token.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedAuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {
  }

  async canActivate(): Promise<boolean> {
    return await this.tokenService.isDashBoardTokenAvailable().then((result) => {
      this.router.navigate(['/dashboard']);
      return false;
    }).catch(() => {
      return true;
    });
  }
}
