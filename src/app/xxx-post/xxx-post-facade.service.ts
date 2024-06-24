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
  isSelectedUser$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsSelectedUser);
  isUserState$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsUserState);
  isPostsLoaded$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoaded);
  isPostsLoading$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoading);
  isPostUpdating$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostUpdating);
  posts$: Observable<XxxPost[]> = this.store.select(XxxPostSelectors.selectPosts);

  constructor(private store: Store) {
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
}
