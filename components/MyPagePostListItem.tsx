import { useAtom } from 'jotai';
import { deletePost } from '../endpoints/postAPI';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { loginAtom, pageAtom } from '../stores/stores';
import MyPageBaseTableItem from './MyPageBaseTableItem';
import MyPagePostListItemView from './MyPagePostListItemView';

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

    const viewProps = {
        onClickDeleteHandler: async () => {
            mutate(postId);
        },
        page,
        author: login?.name,
        postId,
        title,
        content,
    };

    return <MyPagePostListItemView {...viewProps} />;
};

export default MyPagePostListItem;
