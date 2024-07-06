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
  isPostsLoaded$: Observable<boolean> = this.postFacade.isPostsLoaded$;
  isPostsLoading$: Observable<boolean> = this.postFacade.isPostsLoading$;
  isSelectedUser$: Observable<boolean> = this.postFacade.isSelectedUser$;
  posts$: Observable<XxxPost[]> = this.postFacade.posts$;
  selectedPostId$: Observable<number | undefined> = this.postFacade.selectedPostId$;

  constructor(
    private postFacade: XxxPostFacadeService
  ) {
    this.postFacade.showUserPosts();
  }

  selectPost(post: XxxPost) {
    this.postFacade.selectPost(post.id);
  }
}
