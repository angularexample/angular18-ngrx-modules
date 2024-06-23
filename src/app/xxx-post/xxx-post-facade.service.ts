import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {XxxPost} from "./xxx-post.types";
import {Store} from "@ngrx/store";
import * as XxxPostActions from './xxx-post.actions';
import * as XxxPostSelectors from './xxx-post.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxPostFacadeService {
  isSelectedUser$: Observable<boolean> = of(false);
  isUserState$: Observable<boolean> = of(false);
  isPostsLoaded$: Observable<boolean> = of(false);
  isPostsLoading$: Observable<boolean> = of(false);
  isPostUpdating$: Observable<boolean> = of(false);
  posts$: Observable<XxxPost[]> = of([]);

  constructor(private store: Store) {
    this.registerObservables();
  }

  dispatchGetUserPosts(): void {
    this.store.dispatch(XxxPostActions.getUserPosts())
  }

  dispatchSelectPost(postId: number): void {
    this.store.dispatch(XxxPostActions.selectPost({postId}))
  }

  dispatchUpdatePost(post: XxxPost): void {
    this.store.dispatch(XxxPostActions.updatePost({post}))
  }

  private registerObservables(): void {
    this.isSelectedUser$ = this.store.select(XxxPostSelectors.selectIsSelectedUser);
    this.isUserState$ = this.store.select(XxxPostSelectors.selectIsUserState);
    this.isPostsLoaded$ = this.store.select(XxxPostSelectors.selectIsPostsLoaded);
    this.isPostsLoading$ = this.store.select(XxxPostSelectors.selectIsPostsLoading);
    this.isPostUpdating$ = this.store.select(XxxPostSelectors.selectIsPostUpdating);
    this.posts$ = this.store.select(XxxPostSelectors.selectPosts);
  }
}
