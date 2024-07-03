import {ChangeDetectionStrategy, Component} from '@angular/core';
import {XxxContentService} from "../common/xxx-content/xxx-content.service";
import {Observable} from "rxjs";
import {XxxContent} from "../common/xxx-content/xxx-content.types";

@Component({
  selector: 'xxx-xxx-home',
  templateUrl: './xxx-home.component.html',
  styleUrl: './xxx-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxHomeComponent {
  content$: Observable<XxxContent> = this.contentService.getContent('home');

  constructor(private contentService: XxxContentService) {
  }
}
