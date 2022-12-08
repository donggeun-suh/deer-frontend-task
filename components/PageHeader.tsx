import { useRouter } from "next/router";
import HeaderDropDown from "./HeaderDropDown";

const PageHeader = () => {
  const router = useRouter();
  const postId = router.query.id as string;
  return (
    <div className="w-full h-[64px] border-b border-gray-200 px-4 py-4 text-xl flex flex-row justify-between items-center max-w-[1135px]">
      {postId ? (
        <div>{`Post #${postId}`}</div>
      ) : (
        <div>{router.pathname === "/mypage" ? "My Page" : "Posts"}</div>
      )}
      <HeaderDropDown />
    </div>
  );
};

export default PageHeader;
