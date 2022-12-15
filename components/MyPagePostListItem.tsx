import { Table } from "flowbite-react";
import Link from "next/link";
import { Button } from "flowbite-react";
import { useAtom } from "jotai";
import { deletePost } from "../endpoints/postAPI";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { loginAtom, pageAtom } from "../stores/stores";

interface myPostListItemProps {
  postId: number;
  title: string;
  content: string;
}

const MyPagePostListItem = (props: myPostListItemProps) => {
  const { postId, title, content } = props;
  const [page] = useAtom(pageAtom);
  const [login] = useAtom(loginAtom);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["myPosts", login?.id, page]);
    },
  });

  const onClickDeleteHandler = async () => {
    mutate(postId);
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {postId}
      </Table.Cell>
      <Table.Cell>
        <Link href={`/posts/${postId}`}>{title}</Link>
      </Table.Cell>
      <Table.Cell>
        {content.length > 15 ? content.slice(0, 10) + "..." : content}
      </Table.Cell>
      <Table.Cell>{login?.name}</Table.Cell>
      <Table.Cell>
        <Link
          href={`/posts/${postId}/edit`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Button
          className="font-medium"
          color={"failure"}
          size={"xs"}
          onClick={() => onClickDeleteHandler()}
        >
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MyPagePostListItem;
