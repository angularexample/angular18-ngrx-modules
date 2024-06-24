import {createFeatureSelector, createSelector} from "@ngrx/store";
import {XxxPost, xxxPostFeatureName, XxxPostState} from "./xxx-post.types";
import * as XxxUserSelectors from '../xxx-user/xxx-user.selectors';
import {XxxUserState} from "../xxx-user/xxx-user.types";

export const selectPostState = createFeatureSelector<XxxPostState>(xxxPostFeatureName);

export const selectIsPostsLoading = createSelector(
  selectPostState,
  (state: XxxPostState) => state.isPostsLoading
);

export const selectIsPostUpdating = createSelector(
  selectPostState,
  (state: XxxPostState) => state.isPostUpdating
);

export const selectNewPost = createSelector(
  selectPostState,
  (state: XxxPostState) => state.newPost
)

export const selectPosts = createSelector(
  selectPostState,
  (state: XxxPostState) => state.posts
)

export const selectSelectedPostId = createSelector(
  selectPostState,
  (state: XxxPostState) => state.selectedPostId
)

export const selectSelectedUserId = createSelector(
  XxxUserSelectors.selectSelectedUserId,
  (selectedUserId: number | undefined) => selectedUserId
)

export const selectIsPostsLoaded = createSelector(
  selectIsPostsLoading,
  selectPosts,
  (isLoading: boolean, posts: XxxPost[]) => !isLoading && posts && posts.length > 0
);

export const selectSelectedPost = createSelector(
  selectPosts,
  selectSelectedPostId,
  (posts: XxxPost[], postId: number | undefined) => postId ? posts[postId] : undefined
);

export const selectIsSaveButtonDisabled = createSelector(
  selectIsPostsLoading,
  selectSelectedPost,
  selectNewPost,
  (isPostsLoading: boolean, selectedPost: XxxPost | undefined, newPost: XxxPost | undefined) =>
    isPostsLoading || selectedPost === undefined || newPost === undefined || (JSON.stringify(selectedPost) === JSON.stringify(newPost))
);

export const selectIsUserState = createSelector(
  XxxUserSelectors.selectUserState,
  (userState:  XxxUserState | undefined) => !!userState
);

export const selectIsSelectedUser = createSelector(
  XxxUserSelectors.selectIsSelectedUser,
  (isSelectedUser) => isSelectedUser
);
