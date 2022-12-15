import Link from 'next/link';
import { AiOutlineHome, AiOutlineBook } from 'react-icons/ai';

const NavBar = () => {
    return (
        <aside className="flex-none w-[70px] flex h-full sm:block">
            <div className="z-30 h-full w-15 overflow-y-auto border-r border-gray-200 bg-white py-2 px-2">
                <ul className="space-y-1 pt-14">
                    <li>
                        <Link
                            href={`/mypage?page=1`}
                            className="flex items-center justify-center rounded-sm py-1 font-semibold transition duration-75 border-y border-primary text-gray-900 dark:bg-gray-700 dark:text-white"
                        >
                            <div className="flex flex-col items-center justify-center gap-1.5">
                                <AiOutlineHome className="h-5 w-5" /> <span className="text-xs">My Page</span>
                            </div>{' '}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/posts?page=1`}
                            className="flex items-center justify-center rounded-sm py-1 font-semibold transition duration-75 border-y border-primary text-gray-900 dark:bg-gray-700 dark:text-white"
                        >
                            <div className="flex flex-col items-center justify-center gap-1.5">
                                <AiOutlineBook className="h-5 w-5" /> <span className="text-xs">Posts</span>
                            </div>{' '}
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default NavBar;
