import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {XxxPost} from "./xxx-post.types";
import {XxxPostFacadeService} from "./xxx-post-facade.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'xxx-user',
  templateUrl: './xxx-post.component.html',
  styleUrls: ['./xxx-post.component.scss']
})
export class XxxPostComponent implements OnInit{
  isSelectedUser$: Observable<boolean> = of(false);
  isPostsLoaded$: Observable<boolean>= of(false);
  isPostsLoading$: Observable<boolean> = of(false);
  isUserPostLoading$: Observable<boolean> = of(false);
  newPost: XxxPost | undefined;
  postForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  posts$: Observable<XxxPost[]> = of([]);

  constructor(
    private xxxPostFacadeService: XxxPostFacadeService
  ) {
    this.registerObservables();
  }

  selectPost(post: XxxPost) {
    this.xxxPostFacadeService.dispatchSelectPost(post.id);
  }

  updatePost(post: XxxPost) {
    this.xxxPostFacadeService.dispatchUpdatePost(post);
  }

  private registerObservables(): void {
    this.isSelectedUser$ = this.xxxPostFacadeService.isSelectedUser$;
    this.isPostsLoaded$ = this.xxxPostFacadeService.isPostsLoaded$;
    this.isPostsLoading$ = this.xxxPostFacadeService.isPostsLoading$;
    this.isUserPostLoading$ = this.xxxPostFacadeService.isPostUpdating$;
    this.posts$ = this.xxxPostFacadeService.posts$;
  }

  ngOnInit(): void {
    this.xxxPostFacadeService.dispatchGetUserPosts();
  }

}
