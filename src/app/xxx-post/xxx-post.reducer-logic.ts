import {XxxPost, XxxPostFormData, XxxPostState} from "./xxx-post.types";

export const xxxGetUserPosts = (state: XxxPostState) => {
  return {
    ...state,
    isPostsLoading: true,
    posts: [],
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

export const xxxSelectPost = (state: XxxPostState, action: { postId: number }) => {
  let newState: XxxPostState = {
    ...state
  };
  // make sure the selected post exists
  if (state.posts.some((item: XxxPost): boolean => item.id === action.postId)) {
    newState.selectedPostId = action.postId
  }
  return newState;
}

export const xxxSetPostForm = (state: XxxPostState, action: {postForm: XxxPostFormData}) => {
  const newPostForm: XxxPostFormData = JSON.parse(JSON.stringify(action.postForm));
  return {
    ...state,
    postForm: newPostForm
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
