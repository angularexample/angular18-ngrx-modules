import {createAction, props} from '@ngrx/store';
import {XxxUser, xxxUserFeatureName} from "./xxx-user.types";

export const getUsers = createAction(
  `${xxxUserFeatureName}.getUsers`
);

export const getUsersError = createAction(
  `${xxxUserFeatureName}.getUsersError`
);

export const getUsersSuccess = createAction(
  `${xxxUserFeatureName}.getUsersSuccess`,
  props<{ users: XxxUser[] }>()
);

export const selectUser = createAction(
  `${xxxUserFeatureName}.selectUser`,
  props<{ userId: number }>()
);
