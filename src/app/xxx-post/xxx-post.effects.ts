import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import { concatLatestFrom } from '@ngrx/operators';
import {of, map, switchMap, tap, catchError} from 'rxjs';
import * as XxxPostActions from './xxx-post.actions';
import * as XxxPostSelectors from './xxx-post.selectors';
import {XxxPostDataService} from "./xxx-post-data.service";
import {XxxPost} from "./xxx-post.types";


@Injectable()
export class XxxPostEffects {

  getUserPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxPostActions.getUserPosts),
      concatLatestFrom(() => this.store.select(XxxPostSelectors.selectSelectedUserId)),
      map(([_arg1, arg2]) => arg2),
      switchMap((userId: number | undefined) => {
        if (userId !== undefined) {
          return this.xxxPostDataService.getUserPosts(userId).pipe(
            map((posts: XxxPost[]) => XxxPostActions.getUserPostsSuccess({posts})),
            catchError(() => of(XxxPostActions.getUserPostsError()))
          )
        } else {
          return of(XxxPostActions.getUserPostsError())
        }
      })
    ));

  constructor(
    private actions$: Actions,
    private store: Store,
    private xxxPostDataService: XxxPostDataService
  ) {
  }
}
