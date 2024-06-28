import {Component} from '@angular/core';
import {Observable, take} from "rxjs";
import {XxxPost, XxxPostFormData, xxxPostFormDataInitial} from "../xxx-post.types";
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
    this.loadFormData();
    this.subscribeToFormChanges();
  }

  updatePost() {
    this.xxxPostFacadeService.dispatchUpdatePost();
  }

  private loadFormData(): void {
    this.selectedPost$.pipe(
      take(1)
    ).subscribe((post: XxxPost | undefined): void => {
      if (post) {
        const formData: XxxPostFormData = <XxxPostFormData>post;
        this.postForm.setValue(formData);
      }
    })
  }

  private subscribeToFormChanges(): void {
    this.postForm.valueChanges.subscribe(value => {
      console.log('onFormChanges', value)
      //TODO dispatch
    });
  }
}
