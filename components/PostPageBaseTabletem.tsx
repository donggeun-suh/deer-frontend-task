import Link from 'next/link';
import React from 'react';

type Props = {
    postId: number;
    title: string;
    content: string;
    author: string;
};

const PostPageBaseTableItem = ({ ...props }: Props): JSX.Element => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6">{props.postId}</td>
            <td className="py-4 px-6">
                <Link href={`posts/${props.postId}`}>{props.title}</Link>
            </td>
            <td className="py-4 px-6">{props.content}</td>
            <td className="py-4 px-6">{props.author}</td>
        </tr>
    );
};

export default PostPageBaseTableItem;
