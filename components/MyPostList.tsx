import { Table, Button } from "flowbite-react";
import Link from "next/link";
import MyPostListItem from "./MyPostListItem";

const MyPostList = ({ datas, totalRefetch, paginatedRefetch }) => {
  console.log(datas);
  return (
    <div className="w-2/3">
      <Table>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell> Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {datas?.map((data) => (
            <MyPostListItem
              key={data.id}
              postId={data.id}
              title={data.title}
              content={data.content}
              paginatedRefetch={paginatedRefetch}
              totalRefetch={totalRefetch}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyPostList;
