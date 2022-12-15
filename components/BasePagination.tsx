import React, { PropsWithChildren } from 'react';

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (num: number) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const BasePagination = ({ className, ...props }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                <li>
                    <a
                        href="#"
                        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Previous
                    </a>
                </li>
                {Array.from({ length: props.totalPages }, (v, i) => i + 1).map((num) => (
                    <li key={num}>
                        <a
                            href="#"
                            onClick={() => props.onPageChange(num)}
                            className={
                                num === props.currentPage
                                    ? 'px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                    : 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                            }
                        >
                            {num}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="#"
                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default BasePagination;
