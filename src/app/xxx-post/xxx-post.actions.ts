import {createAction, props} from '@ngrx/store';
import {XxxPost, xxxPostFeatureName, XxxPostFormData, XxxPostResponse} from "./xxx-post.types";

export const getUserPosts = createAction(
  `${xxxPostFeatureName}.getUserPosts`
);

export const getUserPostsError = createAction(
  `${xxxPostFeatureName}.getUserPostsError`
);

export const getUserPostsSuccess = createAction(
  `${xxxPostFeatureName}.getUserPostsSuccess`,
  props<{ posts: XxxPost[] }>()
);

export const selectPost = createAction(
  `${xxxPostFeatureName}.selectPost`,
  props<{ postId: number }>()
);

export const showUserPosts = createAction(
  `${xxxPostFeatureName}.showUserPosts`
);

export const setPostForm = createAction(
  `${xxxPostFeatureName}.setPostForm`,
  props<{ postForm: XxxPostFormData }>()
);

export const updatePost = createAction(
  `${xxxPostFeatureName}.updatePost`
);

export const updatePostError = createAction(
  `${xxxPostFeatureName}.updatePostError`
);

export const updatePostSuccess = createAction(
  `${xxxPostFeatureName}.updatePostSuccess`,
  props<{ postResponse: XxxPostResponse }>()
);
