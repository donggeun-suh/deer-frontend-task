import {
  PostDataType,
  PostListDataType,
  UserDataType,
} from "./../types/dataTypes";
import axios from "axios";
import { Post } from "../types/models";

export const getPaginatedUserPostList = async (
  userId: number,
  page: number = 0,
  offset: number = 3
) => {
  const { data } = await axios.get<PostListDataType>(
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
  page: number = 0,
  offset: number = 10
) => {
  const { data } = await axios.get<PostListDataType>(
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

export const getPost = async () => {
  const { data } = await axios.get<PostDataType>(
    `http://localhost:3000/api/posts${postId}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const updatePost = async () => {
  const { data } = await axios.put<PostDataType>(
    `http://localhost:3000/api/posts${postId}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const deletePost = async () => {
  const { data } = await axios.delete<PostDataType>(
    `http://localhost:3000/api/posts${postId}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(JSON.stringify(data));

  return data;
};

export const createPost = async () => {
  const { data } = await axios.post<PostDataType>(
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
