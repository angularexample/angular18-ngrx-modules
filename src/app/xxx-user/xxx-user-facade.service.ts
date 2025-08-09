import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { XxxUser } from "./xxx-user.types";
import { Store } from "@ngrx/store";
import * as XxxUserActions from './xxx-user.actions';
import * as XxxUserSelectors from './xxx-user.selectors';

@Injectable({
  providedIn: 'root'
})
export class XxxUserFacadeService {
  private store: Store = inject(Store);
  readonly isUsersEmpty$: Observable<boolean> = this.store.select(XxxUserSelectors.selectIsUsersEmpty);
  readonly isUsersLoaded$: Observable<boolean> = this.store.select(XxxUserSelectors.selectIsUsersLoaded);
  readonly isUsersLoading$: Observable<boolean> = this.store.select(XxxUserSelectors.selectIsUsersLoading);
  readonly selectedUserId$: Observable<number | undefined> = this.store.select(XxxUserSelectors.selectSelectedUserId);
  readonly users$: Observable<XxxUser[]> = this.store.select(XxxUserSelectors.selectUsers);

  dispatchShowUsers(): void {
    this.store.dispatch(XxxUserActions.showUsers())
  }

  dispatchSelectUser(userId: number): void {
    this.store.dispatch(XxxUserActions.selectUser({userId}))
  }
}
