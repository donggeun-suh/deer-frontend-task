import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiOutlineHome, AiOutlineBook } from "react-icons/ai";
import {
  TextInput,
  Label,
  Checkbox,
  Button,
  Card,
  Table,
} from "flowbite-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="h-screen font-serif">
      <aside className="fixed top-0 left-0 flex h-full sm:block">
        <div className="z-30 h-full w-15 overflow-y-auto border-r border-gray-200 bg-white py-2 px-2">
          <ul className="space-y-1 pt-14">
            <li>
              <Link
                href={`/mypage`}
                className="flex items-center justify-center rounded-sm py-1 font-semibold transition duration-75 border-y border-primary text-gray-900 dark:bg-gray-700 dark:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <AiOutlineHome className="h-5 w-5" />{" "}
                  <span className="text-xs">My Page</span>
                </div>{" "}
              </Link>
            </li>
            <li>
              <Link
                href={`/posts`}
                className="flex items-center justify-center rounded-sm py-1 font-semibold transition duration-75 border-y border-primary text-gray-900 dark:bg-gray-700 dark:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <AiOutlineBook className="h-5 w-5" />{" "}
                  <span className="text-xs">Posts</span>
                </div>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="pl-20 bg-white ">
        <div className="w-full h-[64px] border-b border-gray-200 px-4 py-4 text-xl">
          Posts - {id}
        </div>
        <div className="flex flex-col h-full pt-4 pr-2">
          <div className="w-full space-y-2">
            <Card>
              {" "}
              <span>Title: </span> <span>Writer:</span> <Card> </Card>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
