import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import BaseButton from './BaseButton';
type Props = {
    postId: number;
    title: string;
    content: string;
    author: string;
    onClickDeleteHandler: () => void;
};

const MyPageBaseTableItem = ({ ...props }: Props): JSX.Element => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6">{props.postId}</td>
            <td className="py-4 px-6">{props.title}</td>
            <td className="py-4 px-6">{props.content}</td>
            <td className="py-4 px-6">{props.author}</td>

            <td className="py-4 px-6">
                {' '}
                <Link
                    href={`/posts/${props.postId}/edit`}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    Edit
                </Link>
            </td>
            <td className="py-4 px-6">
                {' '}
                <BaseButton onClick={() => props.onClickDeleteHandler()}>Delete</BaseButton>
            </td>
        </tr>
    );
};

export default MyPageBaseTableItem;
