import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { User } from '../../types/modelTypes';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const data = req.body;
            const users: User[] = await prisma.user.findMany();
            const emailExists = users.filter((user) => {
                return user.email === data.email;
            });
            if (emailExists.length > 0) {
                res.status(404).json('email already exists!');
            }
            const savedUser = await prisma.user.create({
                data: data,
            });
            res.status(200).json(savedUser);
        }

        res.status(405).json('wrong http method.');
    } catch (e) {
        alert(e);
    }
};

export default handler;
