import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const PostPageBaseTable = ({ children }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            No.
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Title
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Description
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Author
                        </th>
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export default PostPageBaseTable;
