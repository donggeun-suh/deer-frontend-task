import { Table } from "flowbite-react";
import Link from "next/link";
import { Button } from "flowbite-react";
import axios from "axios";
import { useAtom } from "jotai";

const MyPostListItem = ({
  postId,
  title,
  content,
  paginatedRefetch,
  totalRefetch,
}: {
  postId: number;
  title: string;
  content: string;
  paginatedRefetch: () => void;
  totalRefetch: () => void;
}) => {
  const onClickDeleteHandler = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/posts/${postId}`
      );
      console.log(res);
      if (res.status === 200) {
        totalRefetch();
        paginatedRefetch();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {postId}
      </Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{content}</Table.Cell>
      <Table.Cell>Study Note</Table.Cell>
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
          onClick={onClickDeleteHandler}
        >
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MyPostListItem;
