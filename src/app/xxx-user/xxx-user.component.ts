import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {XxxUser} from "./xxx-user.types";
import {XxxUserFacadeService} from "./xxx-user-facade.service";

@Component({
  selector: 'app-xxx-user',
  templateUrl: './xxx-user.component.html',
  styleUrls: ['./xxx-user.component.scss']
})
export class XxxUserComponent {
  isUsersLoaded$: Observable<boolean> | undefined;
  isUsersLoading$: Observable<boolean> | undefined;
  users$: Observable<XxxUser[]> | undefined;

  constructor(private xxxUserFacadeService: XxxUserFacadeService) {
    debugger
    this.registerObservables();
    this.xxxUserFacadeService.dispatchGetUsers();
  }

  private registerObservables():void{
    this.isUsersLoaded$=this.xxxUserFacadeService.isUsersLoaded$;
    this.isUsersLoading$=this.xxxUserFacadeService.isUsersLoading$;
    this.users$=this.xxxUserFacadeService.users$;
  }

  rowClick(user: XxxUser) {
    this.xxxUserFacadeService.dispatchSelectUser(user.id);
  }
}
