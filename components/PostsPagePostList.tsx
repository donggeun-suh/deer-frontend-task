import { Table } from 'flowbite-react';
import { PostListDataType } from '../types/dataTypes';
import PostPageBaseTable from './PostPageBaseTable';
import TotalPostListItem from './PostPagePostListItem';

const PostsPagePostList = ({ datas }: { datas?: PostListDataType }) => {
    console.log(datas);
    return (
        <div className=" max-w-[1024px] flex-grow">
            <PostPageBaseTable>
                {datas?.map((data) => (
                    <TotalPostListItem
                        key={data.id}
                        postId={data.id}
                        title={data.title}
                        content={data.content}
                        author={data.user.name}
                    />
                ))}
            </PostPageBaseTable>
        </div>
    );
};

export default PostsPagePostList;
