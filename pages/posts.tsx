import { Card } from "flowbite-react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPaginatedPostList } from "../endpoints/postAPI";
import NavBar from "../components/NavBar.";
import PaginationBar from "../components/PostsPaginationBar";
import { loginAtom, postPageAtom } from "../stores/stores";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import PageHeader from "../components/PageHeader";
import PostsPagePostList from "../components/PostsPagePostList";

const Posts = () => {
  const [login, setLogin] = useAtom(loginAtom);
  const [page] = useAtom(postPageAtom);
  const router = useRouter();

  useEffect(() => {
    const loginItem = localStorage.getItem("login") as string;
    if (!loginItem) {
      router.push("/");
    }
    setLogin(JSON.parse(loginItem));
  }, []);

  const { data: paginatedData } = useQuery({
    queryKey: ["totalPosts", page],
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
          <Card className="flex mt-4 pr-2 h-[700px] max-w-[1024px] ">
            <PostsPagePostList datas={paginatedData?.posts} />
            <PaginationBar totalPage={paginatedData?.totalPage} />
          </Card>
        </div>
      </div>
    )
  );
};

export default Posts;
