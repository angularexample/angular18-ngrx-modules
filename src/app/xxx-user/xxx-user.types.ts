export interface XxxUser {
  id: number;
  name: string;
}

export const xxxUserFeatureName='xxxUser';

export const xxxUserInitialState: XxxUserState = {
  isUsersLoading: false,
  selectedUserId: undefined,
  users: []
};

export interface XxxUserState {
  isUsersLoading: boolean;
  selectedUserId: number | undefined;
  users: XxxUser[];
}
