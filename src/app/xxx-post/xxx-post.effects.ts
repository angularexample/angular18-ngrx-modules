import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {concatLatestFrom} from '@ngrx/operators';
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

  selectPost$ = createEffect(() => this.actions$.pipe(
      ofType(XxxPostActions.selectPost),
      tap(() => {
        this.router.navigateByUrl('/post/edit')
      })
    ), {dispatch: false}
  );

  updatePosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XxxPostActions.updatePost),
      concatLatestFrom(() => this.store.select(XxxPostSelectors.selectEditedPost)),
      map(([_arg1, arg2]) => arg2),
      switchMap((post: XxxPost | undefined) => {
        if (post !== undefined) {
          return this.xxxPostDataService.updatePost(post).pipe(
            map((post: XxxPost) => XxxPostActions.updatePostSuccess({post})),
            catchError(() => of(XxxPostActions.updatePostError()))
          )
        } else {
          return of(XxxPostActions.updatePostError())
        }
      })
    ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private xxxPostDataService: XxxPostDataService
  ) {
  }
}
