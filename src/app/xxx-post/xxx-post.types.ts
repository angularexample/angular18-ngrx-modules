export interface XxxPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const xxxPostFeatureName = 'xxxPost';

export const xxxPostInitialState: XxxPostState = {
  isPostsLoading: false,
  isPostUpdating: false,
  posts: [],
};

export interface XxxPostState {
  isPostsLoading: boolean;
  isPostUpdating: boolean;
  newPost?: XxxPost;
  posts: XxxPost[];
  selectedPostId?: number;
}
