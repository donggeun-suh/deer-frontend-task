import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Post } from "../../../types/models";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const postsData: Post[] = await prisma.post.findMany();
      res.status(200).json(postsData);
    }

    if (req.method === "POST") {
      const postData = req.body;
      const savedPost: Post = await prisma.post.create({
        data: postData,
      });
      res.status(200).json(savedPost);
    }

    res.status(405).json("wrong http method.");
  } catch (e) {
    console.log(e);
  }
};

export default handler;
