import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { PostListDataType } from "../../../../../types/dataTypes";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET" && req.query.page && req.query.offset) {
    const pageNum: number = parseInt(req.query.page as string, 10);
    const offsetNum: number = parseInt(req.query.offset as string, 10);
    const userId: number = parseInt(req.query.userId as string, 10);
    console.log("userId", userId);

    const postsData: PostListDataType | null = await prisma.post.findMany({
      skip: offsetNum * (pageNum - 1),
      take: offsetNum,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      where: {
        userId: userId,
      },
    });
    const postDataSize: number = await prisma.post.count({
      where: {
        userId: userId,
      },
    });
    res.status(200).json({
      totalPage: Math.ceil(postDataSize / offsetNum),
      posts: postsData,
    });
  }
};

export default handler;
