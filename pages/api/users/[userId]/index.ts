import { UserDataType } from './../../../../types/dataTypes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET' && req.query.userId) {
        const userId: number = parseInt(req.query.userId as string, 10);

        const userData: UserDataType | null = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
        res.status(200).json(userData);
    }

    res.status(405).json('wrong http method.');
};

export default handler;
