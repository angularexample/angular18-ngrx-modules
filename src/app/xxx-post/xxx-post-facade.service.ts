import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {XxxPost, XxxPostFormData} from "./xxx-post.types";
import * as XxxPostActions from './xxx-post.actions';
import * as XxxPostSelectors from './xxx-post.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxPostFacadeService {
  isPostsLoaded$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoaded);
  isPostsLoading$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostsLoading);
  isPostUpdating$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsPostUpdating);
  isSaveButtonDisabled$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsSaveButtonDisabled);
  isSelectedPost$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsSelectedPost);
  isSelectedUser$: Observable<boolean> = this.store.select(XxxPostSelectors.selectIsSelectedUser);
  posts$: Observable<XxxPost[]> = this.store.select(XxxPostSelectors.selectPosts);
  selectedPost$: Observable<XxxPost | undefined> = this.store.select(XxxPostSelectors.selectSelectedPost);
  selectedPostId$: Observable<number | undefined> = this.store.select(XxxPostSelectors.selectSelectedPostId);

  constructor(private store: Store) {
  }

  selectPost(postId: number): void {
    this.store.dispatch(XxxPostActions.selectPost({postId}))
  }

  setPostForm(postForm: XxxPostFormData): void {
    this.store.dispatch(XxxPostActions.setPostForm({postForm}))
  }

  showUserPosts(): void {
    this.store.dispatch(XxxPostActions.showUserPosts())
  }

  updatePost(): void {
    this.store.dispatch(XxxPostActions.updatePost())
  }
}
