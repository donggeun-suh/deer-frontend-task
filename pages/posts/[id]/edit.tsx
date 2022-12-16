import { Card } from 'flowbite-react';
import NavBar from '../../../components/NavBar.';
import PageHeader from '../../../components/PageHeader';
import PostEditForm from '../../../components/PostEditForm';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getPost } from '../../../endpoints/postAPI';
import { useRouter } from 'next/router';
import { PostDataType } from '../../../types/dataTypes';
import { GetStaticPropsContext } from 'next';

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const id: number = parseInt(context.params?.id as string, 10);
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['posts', id], () => getPost(id));

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const PostEdit = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const { data } = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPost(parseInt(id, 10)),
        enabled: !!id,
    });
    return (
        data && (
            <div className="flex h-screen font-serif">
                <NavBar />
                <div className="flex-1 h-full pl-4 bg-white">
                    <PageHeader />
                    <PostEditForm id={parseInt(id, 10)} data={data as PostDataType} />
                </div>
            </div>
        )
    );
};

export default PostEdit;
