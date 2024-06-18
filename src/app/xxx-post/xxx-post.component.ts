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
  isNoSelectedUser$: Observable<boolean> | undefined;
  isPostsLoaded$: Observable<boolean> | undefined;
  isPostsLoading$: Observable<boolean> | undefined;
  isUserPostLoading$: Observable<boolean> | undefined;
  newPost: XxxPost | undefined;
  postForm: FormGroup | undefined;
  posts$: Observable<XxxPost[]> | undefined;

  constructor(
    private xxxPostFacadeService: XxxPostFacadeService
  ) {
    this.createForm();
    this.registerObservables();
    this.xxxPostFacadeService.dispatchGetUserPosts();
  }

  selectPost(post: XxxPost) {
    this.xxxPostFacadeService.dispatchSelectPost(post.id);
  }

  updatePost(post: XxxPost) {
    this.xxxPostFacadeService.dispatchUpdatePost(post);
  }

  private createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl('')
    })
  }

  private registerObservables(): void {
    this.isNoSelectedUser$ = this.xxxPostFacadeService.isNoSelectedUser$;
    this.isPostsLoaded$ = this.xxxPostFacadeService.isPostsLoaded$;
    this.isPostsLoading$ = this.xxxPostFacadeService.isPostsLoading$;
    this.isUserPostLoading$ = this.xxxPostFacadeService.isPostUpdating$;
    this.posts$ = this.xxxPostFacadeService.posts$;
  }

}
