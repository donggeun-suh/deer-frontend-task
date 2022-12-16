import { useAtom } from 'jotai';
import { deletePost } from '../endpoints/postAPI';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { loginAtom, pageAtom } from '../stores/stores';
import MyPageBaseTableItem from './MyPageBaseTableItem';

interface myPostListItemViewProps {
    postId: number;
    title: string;
    content: string;
    onClickDeleteHandler: () => void;
    page: number;
    author: string;
}

const MyPagePostListItemView = (props: myPostListItemViewProps) => {
    return (
        <>
            <MyPageBaseTableItem
                postId={props.postId}
                title={props.title}
                content={props.content.length > 15 ? props.content.slice(0, 10) + '...' : props.content}
                author={props.author}
                onClickDeleteHandler={props.onClickDeleteHandler}
            />
        </>
    );
};

export default MyPagePostListItemView;
