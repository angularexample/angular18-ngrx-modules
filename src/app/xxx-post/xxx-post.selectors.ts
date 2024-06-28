import {createFeatureSelector, createSelector} from "@ngrx/store";
import {XxxPost, xxxPostFeatureName, XxxPostFormData, XxxPostState} from "./xxx-post.types";
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

export const selectPostForm = createSelector(
  selectPostState,
  (state: XxxPostState) => state.postForm
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
  (posts: XxxPost[], postId: number | undefined) => {
    let post: XxxPost | undefined = undefined;
    if (postId !== undefined && posts.length > 0) {
      post = posts.find(item => item.id === postId);
    }
    return post;
  }
);

export const selectEditedPost = createSelector(
  selectSelectedPost,
  selectPostForm,
  (selectedPost: XxxPost | undefined, postForm: XxxPostFormData | undefined) => {
    let editedPost: XxxPost | undefined;
    if (selectedPost && postForm) {
      editedPost = {
        ...selectedPost,
        //...postForm
      };
    }
    return editedPost
  }
);

export const selectIsSaveButtonDisabled = createSelector(
  selectIsPostsLoaded,
  selectSelectedPost,
  selectPostForm,
  (isPostsLoaded: boolean, selectedPost: XxxPost | undefined, postForm: XxxPostFormData | undefined) => {
    const oldPost: XxxPostFormData = <XxxPostFormData>selectedPost;
    return (!isPostsLoaded) || (selectedPost === undefined) || (postForm === undefined) || (JSON.stringify(oldPost) === JSON.stringify(postForm))
  }
);

export const selectIsUserState = createSelector(
  XxxUserSelectors.selectUserState,
  (userState: XxxUserState | undefined) => !!userState
);

export const selectIsSelectedPost = createSelector(
  selectPostState,
  (state: XxxPostState) => state.selectedPostId !== undefined
);

export const selectIsSelectedUser = createSelector(
  XxxUserSelectors.selectIsSelectedUser,
  (isSelectedUser) => isSelectedUser
);
