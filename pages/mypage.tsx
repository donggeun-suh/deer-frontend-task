import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { loginAtom, pageAtom } from "../stores/stores";
import BulletinBoard from "../components/BulletinBoard";
import MyPagePostList from "../components/MyPagePostList";
import { useQuery } from "@tanstack/react-query";
import { getPaginatedUserPostList } from "../endpoints/postAPI";
import NavBar from "../components/NavBar.";
import MyPagePaginationBar from "../components/MyPagePaginationBar";
import PageHeader from "../components/PageHeader";

const MyPage = () => {
  const [login, setLogin] = useAtom(loginAtom);
  const [page, setPage] = useAtom(pageAtom);
  const router = useRouter();

  useEffect(() => {
    const loginItem = localStorage.getItem("login") as string;
    if (!loginItem) {
      router.push("/");
    }
    setLogin(JSON.parse(loginItem));
  }, []);

  const { data: paginatedData } = useQuery({
    queryKey: ["myPosts", login?.id, page],
    queryFn: () => getPaginatedUserPostList(login?.id, page),
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!login?.id,
  });

  const onPageChange = (num: number) => {
    setPage(num);
  };

  console.log("mypost_page", paginatedData?.posts);

  return (
    paginatedData && (
      <div className="flex h-screen font-serif">
        <NavBar />
        <div className="flex-1 h-full pl-4 bg-white ">
          <PageHeader />
          <div className="flex flex-col pt-4 pr-2 h-[840px] space-y-4">
            <BulletinBoard />
            <MyPagePostList datas={paginatedData?.posts} />
            <MyPagePaginationBar
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
