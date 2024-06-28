import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxPost, xxxPostFormDataInitial} from "../xxx-post.types";
import {XxxPostFacadeService} from "../xxx-post-facade.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'xxx-post-edit',
  templateUrl: './xxx-post-edit.component.html',
  styleUrls: ['./xxx-post-edit.component.scss', '../../styles/common-styles.scss']
})
export class XxxPostEditComponent {
  isPostUpdating$: Observable<boolean> = this.xxxPostFacadeService.isPostUpdating$;
  isSelectedPost$: Observable<boolean> = this.xxxPostFacadeService.isSelectedPost$;
  iSaveButtonDisabled$: Observable<boolean> = this.xxxPostFacadeService.isSaveButtonDisabled$;
  postForm: FormGroup = new FormGroup({
    body: new FormControl(xxxPostFormDataInitial.body, Validators.required),
    title: new FormControl(xxxPostFormDataInitial.title, Validators.required)
  });
  selectedPost$: Observable<XxxPost | undefined> = this.xxxPostFacadeService.selectedPost$;

  constructor(
    private xxxPostFacadeService: XxxPostFacadeService
  ) {
    this.subscribeToFormChanges();
  }

  updatePost() {
    this.xxxPostFacadeService.dispatchUpdatePost();
  }

  private subscribeToFormChanges(): void {
    this.postForm.valueChanges.subscribe(value => {
      console.log('onFormChanges', value)
      //TODO dispatch
    });
  }
}
