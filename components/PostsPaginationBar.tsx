import { useAtom } from "jotai";
import { postPageAtom } from "../stores/stores";
import { Pagination } from "flowbite-react";
import { useRouter } from "next/router";

interface paginationProps {
  totalPage: number;
}

const PostsPaginationBar = (props: paginationProps) => {
  const [page, setPage] = useAtom(postPageAtom);
  const { totalPage } = props;
  const router = useRouter();
  const onPageChange = async (num: number) => {
    console.log("page change", num);
    await router.push(`/posts?page=${num}`);
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
