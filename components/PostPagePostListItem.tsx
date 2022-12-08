import { Table } from "flowbite-react";
import { useAtom } from "jotai";
import Link from "next/link";
import { loginAtom, pageAtom } from "../stores/stores";

interface PostsPagePostListItemProps {
  postId: number;
  title: string;
  content: string;
}

const PostsPagePostListItem = (props: PostsPagePostListItemProps) => {
  const { postId, title, content } = props;
  const [page] = useAtom(pageAtom);
  const [login] = useAtom(loginAtom);
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {postId}
      </Table.Cell>
      <Table.Cell>
        <Link href={`/posts/${postId}`}>{title}</Link>
      </Table.Cell>
      <Table.Cell>{content}</Table.Cell>
      <Table.Cell>{login?.name}</Table.Cell>
    </Table.Row>
  );
};

export default PostsPagePostListItem;
