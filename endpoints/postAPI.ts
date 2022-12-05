import axios from "axios";
import { Post } from "../types/models";

type GetPostList = {
  data: Post[];
};

export const getPaginatedPostList = async (
  page: number = 0,
  offset: number = 3
) => {
  const { data } = await axios.get<GetPostList>(
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
  const { data } = await axios.get<GetPostList>(
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
