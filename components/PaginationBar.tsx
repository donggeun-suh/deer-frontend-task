import { useAtom } from "jotai";
import { pageAtom } from "../stores/stores";
import { Pagination } from "flowbite-react";

interface paginationProps {
  totalPage: number;
  onPageChange: (num: number) => void;
}

const PaginationBar = (props: paginationProps) => {
  const [page] = useAtom(pageAtom);
  const { totalPage, onPageChange } = props;
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

export default PaginationBar;
