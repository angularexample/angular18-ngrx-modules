import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {XxxPost} from "./xxx-post.types";
import {Store} from "@ngrx/store";
import * as XxxPostActions from './xxx-post.actions';
import * as XxxPostSelectors from './xxx-post.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxPostFacadeService {
  isNoSelectedUser$: Observable<boolean> | undefined;
  isPostsLoaded$: Observable<boolean> | undefined;
  isPostsLoading$: Observable<boolean> | undefined;
  isPostUpdating$: Observable<boolean> | undefined;
  posts$: Observable<XxxPost[]> | undefined;

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
    this.isNoSelectedUser$ = this.store.select(XxxPostSelectors.selectIsNoSelectedUser);
    this.isPostsLoaded$ = this.store.select(XxxPostSelectors.selectIsPostsLoaded);
    this.isPostsLoading$ = this.store.select(XxxPostSelectors.selectIsPostsLoading);
    this.isPostUpdating$ = this.store.select(XxxPostSelectors.selectIsPostUpdating);
    this.posts$ = this.store.select(XxxPostSelectors.selectPosts);
  }
}
