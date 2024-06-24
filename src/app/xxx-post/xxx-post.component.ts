import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxPost} from "./xxx-post.types";
import {XxxPostFacadeService} from "./xxx-post-facade.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'xxx-user',
  templateUrl: './xxx-post.component.html',
  styleUrls: ['./xxx-post.component.scss']
})
export class XxxPostComponent {
  isPostsLoaded$: Observable<boolean>= this.xxxPostFacadeService.isPostsLoaded$;
  isPostsLoading$: Observable<boolean> = this.xxxPostFacadeService.isPostsLoading$;
  isPostUpdating$: Observable<boolean> = this.xxxPostFacadeService.isPostUpdating$;
  isSelectedUser$: Observable<boolean> = this.xxxPostFacadeService.isSelectedUser$;
  // newPost: XxxPost | undefined;
  postForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  posts$: Observable<XxxPost[]> = this.xxxPostFacadeService.posts$;

  constructor(
    private xxxPostFacadeService: XxxPostFacadeService
  ) {
    this.xxxPostFacadeService.dispatchGetUserPosts();
  }

  selectPost(post: XxxPost) {
    this.xxxPostFacadeService.dispatchSelectPost(post.id);
  }

  updatePost(post: XxxPost) {
    this.xxxPostFacadeService.dispatchUpdatePost(post);
  }
}
