import {XxxPost, XxxPostState} from "./xxx-post.types";

export const xxxGetUserPosts = (state: XxxPostState) => {
  return {
    ...state,
    isPostsLoading: true,
    posts: [],
    selectedPostId: undefined
  }
}

export const xxxGetUserPostsError = (state: XxxPostState) => {
  return {
    ...state,
    isPostsLoading: false,
  }
}

export const xxxGetUserPostsSuccess = (state: XxxPostState, action: { posts: XxxPost[] }) => {
  const posts: XxxPost[] = <XxxPost[]>JSON.parse(JSON.stringify(action.posts));
  return {
    ...state,
    isPostsLoading: false,
    posts,
  }
}

export const xxxSelectPost = (state: XxxPostState, action: { selectedPostId: number }) => {
  let newPost: XxxPost | undefined = state.posts.find((item: XxxPost): boolean => item.id === action.selectedPostId);
  if (newPost) {
    newPost = <XxxPost>JSON.parse(JSON.stringify(newPost));
  }
  return {
    ...state,
    newPost,
    selectedPostId: action.selectedPostId
  }
}

export const xxxUpdatePost = (state: XxxPostState) => {
  return {
    ...state,
    isPostUpdating: true,
  }
}

export const xxxUpdatePostError = (state: XxxPostState) => {
  return {
    ...state,
    isPostUpdating: false,
  }
}

export const xxxUpdatePostSuccess = (state: XxxPostState) => {
  return {
    ...state,
    isPostUpdating: false,
  }
}
