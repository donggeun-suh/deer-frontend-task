export type PostListDataType = PostDataType[];

export type UserDataType = {
  id: number;
  name: string;
  email: string;
};

export type PostDataType = {
  id: number;
  title: string;
  content: string;
  userId: number;
  user: UserDataType;
};

export type PaginatedUserPostDataType = {
  totalPage: number;
  posts: PostListDataType;
};

export type loginedUser = {
  name: string;
  email: string;
  id: number;
};
