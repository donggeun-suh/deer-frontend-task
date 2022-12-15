import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { User } from '../../types/modelTypes';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const data = req.body;
            const user: User | null = await prisma.user.findUnique({
                where: {
                    email: data.email,
                },
            });
            res.status(200).json(user);

            if (user && user.password === data.password) {
                res.status(200).json(user);
            } else {
                res.status(405).json('login failed.');
            }
        }
    } catch (e) {
        alert(e);
    }
};

export default handler;
