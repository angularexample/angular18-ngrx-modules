import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxContent} from "../common/xxx-content/xxx-content.types";
import {XxxContentFacadeService} from "../common/xxx-content/xxx-content-facade.service";

@Component({
  selector: 'xxx-xxx-home',
  templateUrl: './xxx-home.component.html',
  styleUrl: './xxx-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxHomeComponent {
  private contentKey = 'home';
  content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  isContentEmpty$ : Observable<boolean> = this.contentFacade.isContentEmpty$(this.contentKey);
  isContentLoading$ : Observable<boolean> = this.contentFacade.isContentLoading$(this.contentKey);

  constructor(private contentFacade: XxxContentFacadeService) {
    this.contentFacade.getContent(this.contentKey);
  }
}
