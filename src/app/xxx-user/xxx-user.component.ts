import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxUser} from "./xxx-user.types";
import {XxxUserFacadeService} from "./xxx-user-facade.service";

@Component({
  selector: 'app-xxx-user',
  templateUrl: './xxx-user.component.html',
  styleUrl: './xxx-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxUserComponent {
  isUsersEmpty$: Observable<boolean> = this.xxxUserFacadeService.isUsersEmpty$;
  isUsersLoaded$: Observable<boolean> = this.xxxUserFacadeService.isUsersLoaded$;
  isUsersLoading$: Observable<boolean> = this.xxxUserFacadeService.isUsersLoading$;
  selectedUserId$: Observable<number | undefined> = this.xxxUserFacadeService.selectedUserId$;
  users$: Observable<XxxUser[]> = this.xxxUserFacadeService.users$;

  constructor(private xxxUserFacadeService: XxxUserFacadeService) {
    this.xxxUserFacadeService.dispatchShowUsers();
  }

  rowClick(user: XxxUser) {
    this.xxxUserFacadeService.dispatchSelectUser(user.id);
  }
}
