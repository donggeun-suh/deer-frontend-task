import { useAtom } from 'jotai';
import { pageAtom } from '../stores/stores';
import { Pagination } from 'flowbite-react';
import Router, { useRouter } from 'next/router';
import BasePagination from './BasePagination';

interface paginationProps {
    totalPage: number;
}

const MyPagePaginationBar = (props: paginationProps) => {
    const [page, setPage] = useAtom(pageAtom);
    const { totalPage } = props;
    const router = useRouter();

    const onPageChange = async (num: number) => {
        console.log('page change', num);
        await router.push(`/mypage?page=${num}`);
        setPage(num);
    };

    return (
        <div className="flex justify-center items-end max-w-[1024px]">
            <BasePagination currentPage={page} totalPages={totalPage} onPageChange={onPageChange} />
        </div>
    );
};

export default MyPagePaginationBar;
