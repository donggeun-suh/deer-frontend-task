import { Table } from "flowbite-react";
import { PostListDataType } from "../types/dataTypes";
import MyPostListItem from "./MyPostListItem";

const MyPostList = ({ datas }: { datas?: PostListDataType }) => {
  console.log(datas);
  return (
    <div className=" max-w-[1024px]">
      <Table>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {datas?.map((data) => (
            <MyPostListItem
              key={data.id}
              postId={data.id}
              title={data.title}
              content={data.content}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyPostList;
