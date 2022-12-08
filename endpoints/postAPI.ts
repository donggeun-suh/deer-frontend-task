import {
  PaginatedUserPostDataType,
  PostDataType,
  PostListDataType,
  UserDataType,
} from "./../types/dataTypes";
import axios from "axios";
import { Post } from "../types/models";

export const getPaginatedUserPostList = async (
  userId: number,
  page: number = 1,
  offset: number = 3
) => {
  console.log("id", userId);
  const { data } = await axios.get<PaginatedUserPostDataType>(
    `http://localhost:3000/api/users/${userId}/posts?page=${page}&offset=${offset}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const getUserData = async (userId: number) => {
  const { data } = await axios.get<UserDataType>(
    `http://localhost:3000/api/users/${userId}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const getPaginatedPostList = async (
  page: number = 1,
  offset: number = 10
) => {
  const { data } = await axios.get<PaginatedUserPostDataType>(
    `http://localhost:3000/api/posts?page=${page}&offset=${offset}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const getPostList = async () => {
  const { data } = await axios.get<PostListDataType>(
    `http://localhost:3000/api/posts`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const getPost = async (postId: number) => {
  const { data } = await axios.get<PostDataType>(
    `http://localhost:3000/api/posts/${postId}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const updatePost = async (postData: Post, postId: number) => {
  const { data } = await axios.put<PostDataType>(
    `http://localhost:3000/api/posts/${postId}`,
    {
      title: postData?.title,
      content: postData?.content,
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const deletePost = async (postId: number) => {
  const { data } = await axios.delete<PostDataType>(
    `http://localhost:3000/api/posts/${postId}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const createPost = async (postData: Post) => {
  const { data } = await axios.post<Post>(`http://localhost:3000/api/posts`, {
    title: postData?.title,
    content: postData?.content,
    userId: postData?.userId,
  });
  console.log(JSON.stringify(data));

  return data;
};
