import { Dropdown } from "flowbite-react";
import { useAtom } from "jotai";
import { loginAtom } from "../stores/stores";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderDropDown = () => {
  const [login] = useAtom(loginAtom);
  const router = useRouter();
  const onClickHandler = () => {
    localStorage.removeItem("login");
    router.push("/");
  };

  return (
    <Dropdown label={`Hello ${login?.name}`}>
      <Dropdown.Header>
        <span className="block text-sm">{login?.name}</span>
        <span className="block text-sm font-medium truncate">
          {login?.email}
        </span>
      </Dropdown.Header>

      <Dropdown.Item>
        <Link href={"/mypage"}>My Page</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link href={"/posts"}>Posts</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => onClickHandler()}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default HeaderDropDown;
