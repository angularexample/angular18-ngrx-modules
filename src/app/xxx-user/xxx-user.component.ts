import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {XxxUser} from "./xxx-user.types";
import {XxxUserFacadeService} from "./xxx-user-facade.service";

@Component({
  selector: 'app-xxx-user',
  templateUrl: './xxx-user.component.html',
  styleUrl: './xxx-user.component.scss'
})
export class XxxUserComponent {
  isUsersLoaded$: Observable<boolean> = this.xxxUserFacadeService.isUsersLoaded$;
  isUsersLoading$: Observable<boolean> = this.xxxUserFacadeService.isUsersLoading$;
  selectedUserId$: Observable<number | undefined> = this.xxxUserFacadeService.selectedUserId$;
  users$: Observable<XxxUser[]> = this.xxxUserFacadeService.users$;

  constructor(private xxxUserFacadeService: XxxUserFacadeService) {
    this.xxxUserFacadeService.dispatchGetUsers();
  }

  rowClick(user: XxxUser) {
    this.xxxUserFacadeService.dispatchSelectUser(user.id);
  }
}
