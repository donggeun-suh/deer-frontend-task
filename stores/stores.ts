import { atom } from "jotai";

type loginedUser = {
  name: string;
  email: string;
  id: number;
};

export const loginAtom = atom<loginedUser>({
  name: "",
  email: "",
  id: 0,
});

export const pageAtom = atom<number>(1);
export const postPageAtom = atom<number>(1);
