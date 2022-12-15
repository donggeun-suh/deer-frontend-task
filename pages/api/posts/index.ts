import { PostListDataType } from './../../../types/dataTypes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Post } from '../../../types/modelTypes';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET' && req.query.page && req.query.offset) {
            const pageNum: number = parseInt(req.query.page as string, 10);
            const offsetNum: number = parseInt(req.query.offset as string, 10);
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
            });
            const postDataSize: number = await prisma.post.count();
            res.status(200).json({
                totalPage: Math.ceil(postDataSize / offsetNum),
                posts: postsData,
            });
        }

        if (req.method === 'GET') {
            const postsData: PostListDataType | null = await prisma.post.findMany({
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            });
            res.status(200).json(postsData);
        }

        if (req.method === 'POST') {
            const postData = req.body;
            const savedPost: Post = await prisma.post.create({
                data: postData,
            });
            res.status(200).json(savedPost);
        }

        res.status(405).json('wrong http method.');
    } catch (e) {
        console.log(e);
    }
};

export default handler;
