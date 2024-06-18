import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {XxxUser} from "./xxx-user.types";
import {Store} from "@ngrx/store";
import * as XxxUserActions from './xxx-user.actions';
import * as XxxUserSelectors from './xxx-user.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxUserFacadeService {
  isUsersLoaded$: Observable<boolean> | undefined;
  isUsersLoading$: Observable<boolean> | undefined;
  users$: Observable<XxxUser[]> | undefined;

  constructor(private store: Store) {
    this.registerObservables();
  }

  dispatchGetUsers():void{
    this.store.dispatch(XxxUserActions.getUsers())
  }

  dispatchSelectUser(userId: number):void{
    this.store.dispatch(XxxUserActions.selectUser({userId}))
  }

  private registerObservables():void{
    this.isUsersLoaded$ = this.store.select(XxxUserSelectors.selectIsUsersLoaded);
    this.isUsersLoading$ = this.store.select(XxxUserSelectors.selectIsUsersLoading);
    this.users$=this.store.select(XxxUserSelectors.selectUsers);
  }
}
