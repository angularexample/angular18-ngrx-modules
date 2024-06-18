import {createAction, props} from '@ngrx/store';
import {XxxPost, xxxPostFeatureName} from "./xxx-post.types";

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

export const updatePost = createAction(
  `${xxxPostFeatureName}.updatePost`,
  props<{ post: XxxPost }>()
);

export const updatePostError = createAction(
  `${xxxPostFeatureName}.updatePost`
);

export const updatePostSuccess = createAction(
  `${xxxPostFeatureName}.updatePost`,
  props<{ post: XxxPost }>()
);
