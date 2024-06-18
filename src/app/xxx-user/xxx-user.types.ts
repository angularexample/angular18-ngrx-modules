export interface XxxUser {
  id: number;
  name: string;
}

export const xxxUserFeatureName='xxxUser';

export const xxxUserInitialState: XxxUserState = {
  isUsersLoading: false,
  users: []
};

export interface XxxUserState {
  isUsersLoading: boolean;
  selectedUserId?: number;
  users: XxxUser[];
}
