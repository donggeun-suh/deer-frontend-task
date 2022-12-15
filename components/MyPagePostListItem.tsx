import { Table } from 'flowbite-react';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import { useAtom } from 'jotai';
import { deletePost } from '../endpoints/postAPI';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { loginAtom, pageAtom } from '../stores/stores';
import MyPageBaseTableItem from './MyPageBaseTableItem';

interface myPostListItemProps {
    postId: number;
    title: string;
    content: string;
}

const MyPagePostListItem = (props: myPostListItemProps) => {
    const { postId, title, content } = props;
    const [page] = useAtom(pageAtom);
    const [login] = useAtom(loginAtom);
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: (postId: number) => deletePost(postId),
        onSuccess: () => {
            queryClient.invalidateQueries(['myPosts', login?.id, page]);
        },
    });

    const onClickDeleteHandler = async () => {
        mutate(postId);
    };

    return (
        <>
            <MyPageBaseTableItem
                postId={postId}
                title={title}
                content={content.length > 15 ? content.slice(0, 10) + '...' : content}
                author={login?.name}
                onClickDeleteHandler={onClickDeleteHandler}
            />
        </>
    );
};

export default MyPagePostListItem;
