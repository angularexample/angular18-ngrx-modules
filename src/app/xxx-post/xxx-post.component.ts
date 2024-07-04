import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxPost} from "./xxx-post.types";
import {XxxPostFacadeService} from "./xxx-post-facade.service";

@Component({
  selector: 'xxx-post',
  templateUrl: './xxx-post.component.html',
  styleUrl: './xxx-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxPostComponent {
  isPostsLoaded$: Observable<boolean> = this.xxxPostFacadeService.isPostsLoaded$;
  isPostsLoading$: Observable<boolean> = this.xxxPostFacadeService.isPostsLoading$;
  isSelectedUser$: Observable<boolean> = this.xxxPostFacadeService.isSelectedUser$;
  posts$: Observable<XxxPost[]> = this.xxxPostFacadeService.posts$;
  selectedPostId$: Observable<number | undefined> = this.xxxPostFacadeService.selectedPostId$;

  constructor(
    private xxxPostFacadeService: XxxPostFacadeService
  ) {
    this.xxxPostFacadeService.dispatchGetUserPosts();
  }

  selectPost(post: XxxPost) {
    this.xxxPostFacadeService.dispatchSelectPost(post.id);
  }
}
