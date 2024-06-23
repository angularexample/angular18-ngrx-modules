import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, take, tap} from 'rxjs';
import {XxxPostFacadeService} from "./xxx-post-facade.service";

@Injectable({
  providedIn: 'root'
})
export class XxxPostGuard implements CanActivate {
  constructor(
    private router: Router,
    private xxxPostFacadeService: XxxPostFacadeService) {
  }

  canActivate(): Observable<boolean> {
    return this.xxxPostFacadeService.isUserState$.pipe(
      take(1),
      tap((result) => {
        if (!result) {
          this.router.navigateByUrl('/user');
          return false;
        }
        return true;
      })
    )
  }
}
