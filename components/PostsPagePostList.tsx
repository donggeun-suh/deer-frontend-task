import { Table } from 'flowbite-react';
import { PostListDataType } from '../types/dataTypes';
import TotalPostListItem from './PostPagePostListItem';

const PostsPagePostList = ({ datas }: { datas?: PostListDataType }) => {
    console.log(datas);
    return (
        <div className=" max-w-[1024px] flex-grow">
            <Table>
                <Table.Head>
                    <Table.HeadCell>No.</Table.HeadCell>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Description</Table.HeadCell>
                    <Table.HeadCell>Author</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {datas?.map((data) => (
                        <TotalPostListItem
                            key={data.id}
                            postId={data.id}
                            title={data.title}
                            content={data.content}
                            author={data.user.name}
                        />
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default PostsPagePostList;
