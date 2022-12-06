import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiOutlineHome, AiOutlineBook } from "react-icons/ai";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { atom, useAtom } from "jotai";
import { loginAtom } from "../stores/stores";
import BulletinBoard from "../components/BulletinBoard";
import MyPostList from "../components/MyPostList";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getPaginatedPostList, getPostList } from "../endpoints/postAPI";
import { Pagination } from "flowbite-react";

const MyPage = () => {
  const [login, setLogin] = useAtom(loginAtom);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("login") || ""));
  }, []);

  const { data: paginatedData, refetch: paginatedRefetch } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPaginatedPostList(page),
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { data: totalData, refetch: totalRefetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPostList(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const onPageChange = (num: number) => {
    setPage(num);
  };

  const length = 10;

  return (
    <div className="h-screen bg-blue-400 font-serif">
      <aside className="fixed top-0 left-0 flex h-full sm:block">
        <div className="z-30 h-full w-15 overflow-y-auto border-r border-gray-200 bg-white py-2 px-2">
          <ul className="space-y-1 pt-14">
            <li>
              <Link
                href={`/mypage`}
                className="flex items-center justify-center rounded-sm py-1 font-semibold transition duration-75 border-y border-primary text-gray-900 dark:bg-gray-700 dark:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <AiOutlineHome className="h-5 w-5" />{" "}
                  <span className="text-xs">My Page</span>
                </div>{" "}
              </Link>
            </li>
            <li>
              <Link
                href={`/posts`}
                className="flex items-center justify-center rounded-sm py-1 font-semibold transition duration-75 border-y border-primary text-gray-900 dark:bg-gray-700 dark:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <AiOutlineBook className="h-5 w-5" />{" "}
                  <span className="text-xs">Posts</span>
                </div>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="h-full pl-20 bg-white ">
        <div className="w-full h-[64px] border-b border-gray-200 px-4 py-4 text-xl">
          My Page: {login?.name}
        </div>
        <div className="flex flex-col pt-4 pr-2 h-[950px]">
          <div className="w-full h-[570px] pb-20">
            <BulletinBoard
              paginatedRefetch={paginatedRefetch}
              totalRefetch={totalRefetch}
            />
          </div>
          <div className="w-full mb-4 h-[250px]">
            <MyPostList
              datas={paginatedData}
              paginatedRefetch={paginatedRefetch}
              totalRefetch={totalRefetch}
            />
          </div>
          <div className="flex justify-center w-2/3">
            <Pagination
              currentPage={page}
              totalPages={length}
              showIcons={true}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
