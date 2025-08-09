import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { XxxContentFacadeService } from "./xxx-content-facade.service";

@Component({
  selector: 'xxx-content',
  templateUrl: './xxx-content.component.html',
  styleUrl: './xxx-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxContentComponent implements OnInit {
  @Input({required: true}) contentKey!: string;
  protected isContentEmpty$: Observable<boolean> | undefined;
  protected isContentError$: Observable<boolean> | undefined;
  protected isContentLoading$: Observable<boolean> | undefined;
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);

  ngOnInit(): void {
    this.isContentEmpty$ = this.contentFacade.isContentEmpty$(this.contentKey);
    this.isContentError$ = this.contentFacade.isContentError$(this.contentKey);
    this.isContentLoading$ = this.contentFacade.isContentLoading$(this.contentKey);
  }
}
