import { useAtom } from "jotai";
import { pageAtom } from "../stores/stores";
import { Pagination } from "flowbite-react";

interface paginationProps {
  totalPage: number;
}

const MyPagePaginationBar = (props: paginationProps) => {
  const [page, setPage] = useAtom(pageAtom);
  const { totalPage } = props;
  const onPageChange = (num: number) => {
    setPage(num);
  };
  return (
    <div className="flex justify-center items-end max-w-[1024px]">
      <Pagination
        currentPage={page}
        totalPages={totalPage}
        showIcons={true}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default MyPagePaginationBar;
