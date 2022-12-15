import { Table } from 'flowbite-react';
import { PostListDataType } from '../types/dataTypes';
import MyPageBaseTable from './MyPageBaseTable';
import MyPageBaseTableItem from './MyPageBaseTableItem';
import MyPostListItem from './MyPagePostListItem';

const MyPagePostList = ({ datas }: { datas?: PostListDataType }) => {
    console.log(datas);
    return (
        <div className=" max-w-[1024px] flex-grow">
            <MyPageBaseTable>
                {datas?.map((data) => (
                    <MyPostListItem key={data.id} postId={data.id} title={data.title} content={data.content} />
                ))}
            </MyPageBaseTable>
        </div>
    );
};

export default MyPagePostList;
