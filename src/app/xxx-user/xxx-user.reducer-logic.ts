import {XxxUser, XxxUserState} from "./xxx-user.types";

export const xxxGetUsers = (state: XxxUserState) => {
  debugger
  return {
    ...state,
    isUsersLoading: true,
    selectedUserId: undefined,
    users: []
  }
}

export const xxxGetUsersError = (state: XxxUserState) => {
  return {
    ...state,
    isUsersLoading: false,
  }
}

export const xxxGetUsersSuccess = (state: XxxUserState, action: { users: XxxUser[] }) => {
  const users: XxxUser[] = <XxxUser[]>JSON.parse(JSON.stringify(action.users));
  return {
    ...state,
    isUsersLoading: false,
    users,
  }
}
export const xxxSelectUser = (state: XxxUserState, action: {userId: number}) => {
  return {
    ...state,
    selectedUserId: action.userId
  }
}
