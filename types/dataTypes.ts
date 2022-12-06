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
