import { atom } from "jotai";
import { loginedUser } from "../types/dataTypes";

export const pageAtom = atom<number>(1);
export const postPageAtom = atom<number>(1);
export const loginAtom = atom<loginedUser>({
  name: "",
  email: "",
  id: 0,
});
