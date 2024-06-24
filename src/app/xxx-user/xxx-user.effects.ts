import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {Router} from "@angular/router";
import {XxxUserDataService} from "./xxx-user-data.service";
import * as XxxUserActions from './xxx-user.actions';
import {XxxUser} from "./xxx-user.types";

@Injectable()
export class XxxUserEffects {

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
    ofType(XxxUserActions.getUsers),
    switchMap(() =>
      this.xxxUserDataService.getUsers().pipe(
        map((users: XxxUser[]) => XxxUserActions.getUsersSuccess({users})),
        catchError(() => of(XxxUserActions.getUsersError()))
      )
    )
  ));

  selectUser$ = createEffect(() => this.actions$.pipe(
      ofType(XxxUserActions.selectUser),
      tap(() => {
        this.router.navigateByUrl('/post')
      })
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private xxxUserDataService: XxxUserDataService
  ) {
  }
}
