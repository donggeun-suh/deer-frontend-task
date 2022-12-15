import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Post } from '../../../types/modelTypes';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const postId: number = parseInt(req.query.postId as string, 10);
        const postIdObject: { id: number } = { id: postId };

        if (req.method === 'GET') {
            const postsData: Post | null = await prisma.post.findUnique({
                where: postIdObject,
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

        if (req.method === 'PUT') {
            const postData = req.body;
            const savedPost: Post = await prisma.post.update({
                data: postData,
                where: postIdObject,
            });
            res.status(200).json(savedPost);
        }

        if (req.method === 'DELETE') {
            const deletedPost: Post = await prisma.post.delete({
                where: postIdObject,
            });
            res.status(200).json(deletedPost);
        }

        res.status(405).json('wrong http method.');
    } catch (e) {
        console.log(e);
    }
};

export default handler;
