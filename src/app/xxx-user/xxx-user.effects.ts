import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, filter, map, of, switchMap, tap} from 'rxjs';
import {concatLatestFrom} from "@ngrx/operators";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {XxxUserDataService} from "./xxx-user-data.service";
import * as XxxUserActions from './xxx-user.actions';
import {XxxUserApiResponse} from "./xxx-user.types";
import * as XxxUserSelectors from "../xxx-user/xxx-user.selectors";

@Injectable()
export class XxxUserEffects {

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
    ofType(XxxUserActions.getUsers),
      switchMap(() =>
      this.xxxUserDataService.getUsers().pipe(
        map((response: XxxUserApiResponse) => XxxUserActions.getUsersSuccess({payload: response})),
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

  showUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxUserActions.showUsers),
      concatLatestFrom(() => this.store.select(XxxUserSelectors.selectIsUsersLoaded)),
      map(([_arg1, arg2]) => arg2),
      filter((isUsersLoaded: boolean) => !isUsersLoaded),
      map(() => XxxUserActions.getUsers())
    ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private xxxUserDataService: XxxUserDataService
  ) {
  }
}
