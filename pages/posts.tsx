import { Card } from 'flowbite-react';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPaginatedPostList } from '../endpoints/postAPI';
import NavBar from '../components/NavBar.';
import PaginationBar from '../components/PostsPaginationBar';
import { loginAtom, postPageAtom } from '../stores/stores';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import PageHeader from '../components/PageHeader';
import PostsPagePostList from '../components/PostsPagePostList';
import BaseCard from '../components/BaseCard';

const Posts = () => {
    const [login, setLogin] = useAtom(loginAtom);
    const [page, setPage] = useAtom(postPageAtom);
    const router = useRouter();
    const queryPage = parseInt(router?.query?.page as string, 10);

    useEffect(() => {
        const loginItem = localStorage.getItem('login') as string;
        if (!loginItem) {
            router.push('/');
        }
        setLogin(JSON.parse(loginItem));
    }, [router, setLogin]);

    useEffect(() => {
        setPage(queryPage);
    }, [setPage, queryPage]);

    const { data: paginatedData } = useQuery({
        queryKey: ['totalPosts', page],
        queryFn: () => getPaginatedPostList(page),
        keepPreviousData: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: !!login?.id,
    });

    return (
        paginatedData && (
            <div className="flex h-screen font-serif">
                <NavBar />
                <div className="flex-1 h-full pl-4 bg-white">
                    <PageHeader />
                    <BaseCard className="mt-4 h-[700px] max-w-[1024px] flex flex-col">
                        <PostsPagePostList datas={paginatedData?.posts} />
                        <PaginationBar totalPage={paginatedData?.totalPage} />
                    </BaseCard>
                </div>
            </div>
        )
    );
};

export default Posts;
