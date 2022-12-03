import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getPostList } from "../endpoints/postAPI";
import { Post } from "../types/models";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts"], getPostList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const PostList = () => {
  const { data } = useQuery(["posts"], getPostList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
};

export default PostList;
