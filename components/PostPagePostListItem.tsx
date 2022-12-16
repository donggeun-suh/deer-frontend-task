import { Table } from 'flowbite-react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { loginAtom, pageAtom } from '../stores/stores';
import PostPageBaseTableItem from './PostPageBaseTabletem';

interface postsPagePostListItemProps {
    postId: number;
    title: string;
    content: string;
    author: string;
}

const PostsPagePostListItem = (props: postsPagePostListItemProps) => {
    const { postId, title, content, author } = props;
    return (
        <PostPageBaseTableItem {...props} />

        // <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        //     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{postId}</Table.Cell>
        //     <Table.Cell>
        //         <Link href={`/posts/${postId}`}>{title}</Link>
        //     </Table.Cell>
        //     <Table.Cell>{content}</Table.Cell>
        //     <Table.Cell>{author}</Table.Cell>
        // </Table.Row>
    );
};

export default PostsPagePostListItem;
