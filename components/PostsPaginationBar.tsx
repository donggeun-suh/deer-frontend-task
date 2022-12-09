import { useAtom } from "jotai";
import { postPageAtom } from "../stores/stores";
import { Pagination } from "flowbite-react";

interface paginationProps {
  totalPage: number;
}

const PostsPaginationBar = (props: paginationProps) => {
  const [page, setPage] = useAtom(postPageAtom);
  const { totalPage } = props;
  const onPageChange = (num: number) => {
    setPage(num);
  };
  return (
    <div className="flex justify-center max-w-[1024px]">
      <Pagination
        currentPage={page}
        totalPages={totalPage}
        showIcons={true}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PostsPaginationBar;
