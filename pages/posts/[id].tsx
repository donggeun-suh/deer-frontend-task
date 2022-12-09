import { useRouter } from "next/router";
import { Card } from "flowbite-react";
import NavBar from "../../components/NavBar.";
import PageHeader from "../../components/PageHeader";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getPost } from "../../endpoints/postAPI";
import { useEffect } from "react";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id: number = context.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", id], () => getPost(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const SinglePostPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(parseInt(id, 10)),
    enabled: !!id,
  });

  useEffect(() => {
    const loginItem = localStorage.getItem("login") as string;
    if (!loginItem) {
      router.push("/");
    }
  }, []);

  console.log(data?.user);

  return (
    <div className="flex h-screen font-serif">
      <NavBar />
      <div className="flex-1 h-full pl-4 bg-white">
        <PageHeader />
        <Card className="max-w-[1024px] space-y-2 mt-4">
          {" "}
          <span>Title: {data?.title} </span>{" "}
          <span>Writer: {data?.user?.name}</span> <Card>{data?.content}</Card>
        </Card>
      </div>
    </div>
  );
};

export default SinglePostPage;
