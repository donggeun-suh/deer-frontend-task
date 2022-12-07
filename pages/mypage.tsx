import { useRouter } from "next/router";
import Link from "next/link";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { loginAtom, pageAtom } from "../stores/stores";
import BulletinBoard from "../components/BulletinBoard";
import MyPostList from "../components/MyPostList";
import PaginationBar from "../components/PaginationBar";
import { useQuery } from "@tanstack/react-query";
import { getPaginatedUserPostList } from "../endpoints/postAPI";
import NavBar from "../components/NavBar.";

const MyPage = () => {
  const [login, setLogin] = useAtom(loginAtom);
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("login") || ""));
  }, []);

  const { data: paginatedData } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPaginatedUserPostList(login?.id, page),
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!login?.id,
  });

  // const { data: userData } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => getUserData(login?.id),
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  // });

  const onPageChange = (num: number) => {
    setPage(num);
  };

  return (
    paginatedData && (
      <div className="flex h-screen bg-blue-400 font-serif">
        <NavBar />
        <div className="flex-1 h-full pl-4 bg-white ">
          <div className="w-full h-[64px] border-b border-gray-200 px-4 py-4 text-xl">
            My Page: {login?.name}
          </div>
          <div className="flex flex-col pt-4 pr-2 h-[950px]">
            <BulletinBoard />
            <MyPostList datas={paginatedData?.posts} />
            <PaginationBar
              totalPage={paginatedData?.totalPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default MyPage;
