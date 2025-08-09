import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from "rxjs";
import { XxxContent } from "../xxx-common/xxx-content/xxx-content.types";
import { XxxContentFacadeService } from "../xxx-common/xxx-content/xxx-content-facade.service";
import { XxxUser } from "./xxx-user.types";
import { XxxUserFacadeService } from "./xxx-user-facade.service";

@Component({
  selector: 'app-xxx-user',
  templateUrl: './xxx-user.component.html',
  styleUrl: './xxx-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxUserComponent {
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  private userFacade: XxxUserFacadeService = inject(XxxUserFacadeService);
  protected readonly contentKey: string = 'user';
  protected readonly content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  protected readonly isUsersEmpty$: Observable<boolean> = this.userFacade.isUsersEmpty$;
  protected readonly isUsersLoaded$: Observable<boolean> = this.userFacade.isUsersLoaded$;
  protected readonly isUsersLoading$: Observable<boolean> = this.userFacade.isUsersLoading$;
  protected readonly selectedUserId$: Observable<number | undefined> = this.userFacade.selectedUserId$;
  protected readonly users$: Observable<XxxUser[]> = this.userFacade.users$;

  constructor() {
    this.contentFacade.getContent(this.contentKey)
    this.userFacade.dispatchShowUsers();
  }

  protected rowClick(user: XxxUser): void {
    this.userFacade.dispatchSelectUser(user.id);
  }
}
