import {createFeatureSelector, createSelector} from "@ngrx/store";
import {XxxUser, xxxUserFeatureName, XxxUserState} from "./xxx-user.types";

export const selectUserState = createFeatureSelector<XxxUserState>(xxxUserFeatureName);

export const selectIsUsersLoading = createSelector(
  selectUserState,
  // (state: XxxUserState) => state.isUsersLoading
  (state: XxxUserState) => {
    debugger
    return state.isUsersLoading}
);

export const selectSelectedUserId = createSelector(
  selectUserState,
  (state: XxxUserState) => state.selectedUserId
)

export const selectUsers = createSelector(
  selectUserState,
  (state: XxxUserState) => state.users
)

export const selectIsUsersLoaded = createSelector(
  selectIsUsersLoading,
  selectUsers,
  // (isLoading: boolean, users: XxxUser[]) => isLoading && users && users.length > 0
  (isLoading: boolean, users: XxxUser[]) => {
    debugger;
    return isLoading && users && users.length > 0
  }
);

export const selectIsNoSelectedUser = createSelector(
  selectSelectedUserId,
  (userId: number | undefined) => selectSelectedUserId === undefined
);
