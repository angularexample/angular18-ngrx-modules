export interface XxxPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const xxxPostFeatureName = 'xxxPost';

export interface XxxPostFormData {
  title: string;
  body: string;
}

export const xxxPostFormDataInitial: XxxPostFormData = {
  body: '',
  title: ''
};

export const xxxPostInitialState: XxxPostState = {
  isPostsLoading: false,
  isPostUpdating: false,
  posts: [],
};

export interface XxxPostState {
  isPostsLoading: boolean;
  isPostUpdating: boolean;
  postForm?: XxxPostFormData;
  posts: XxxPost[];
  selectedPostId?: number;
}
