import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from "rxjs";
import { XxxPost } from "./xxx-post.types";
import { XxxPostFacadeService } from "./xxx-post-facade.service";
import { XxxContentFacadeService } from "../xxx-common/xxx-content/xxx-content-facade.service";
import { XxxContent } from "../xxx-common/xxx-content/xxx-content.types";

@Component({
  selector: 'xxx-post',
  templateUrl: './xxx-post.component.html',
  styleUrl: './xxx-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxPostComponent {
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  private postFacade: XxxPostFacadeService = inject(XxxPostFacadeService);
  protected readonly contentKey: string = 'post';
  protected readonly content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  protected readonly isNoSelectedUser$: Observable<boolean> = this.postFacade.isNoSelectedUser$;
  protected readonly isPostsEmpty$: Observable<boolean> = this.postFacade.isPostsEmpty$;
  protected readonly isPostsLoaded$: Observable<boolean> = this.postFacade.isPostsLoaded$;
  protected readonly isPostsLoading$: Observable<boolean> = this.postFacade.isPostsLoading$;
  protected readonly posts$: Observable<XxxPost[]> = this.postFacade.posts$;
  protected readonly selectedPostId$: Observable<number | undefined> = this.postFacade.selectedPostId$;

  constructor() {
    this.contentFacade.getContent(this.contentKey)
    this.postFacade.getUserPosts();
  }

  protected selectPost(post: XxxPost): void {
    this.postFacade.selectPost(post.id);
  }
}
