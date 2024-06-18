import {Injectable} from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {filter, map, switchMap} from 'rxjs';
import * as XxxPostActions from './xxx-post.actions';
import * as XxxPostSelectors from './xxx-post.selectors';
import {XxxUserDataService} from "../xxx-user/xxx-user-data.service";


@Injectable()
export class XxxPostEffects {

  // getUserPosts$ = createEffect(() => this.actions$.pipe(
  //     ofType(XxxPostActions.getUserPosts),
  //     concatLatestFrom(()=>this.store.select(XxxPostSelectors.selectSelectedUserId)),
  //     map(([_arg1,arg2]) => arg2),
  //     filter((userId:number|undefined)=> (userId!==undefined)),
  //     switchMap((userId: number|undefined) => {
  //       this.xxxUserDataService.getUserPosts(userId).pipe().subscribe((result) => {
  //         return XxxPostActions.getUserPostsSuccess({posts: result});
  //       })
  //     })
  //   )
  // );

  constructor(
    private actions$: Actions,
    private store: Store,
    private xxxUserDataService: XxxUserDataService
  ) {
  }
}
