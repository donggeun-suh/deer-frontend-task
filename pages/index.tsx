import { useForm } from "react-hook-form";
import { TextInput, Label, Checkbox, Button, Card } from "flowbite-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { clear } from "console";
import bg from "../public/planner.avif";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { loginAtom } from "../stores/stores";

type FormValues = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [login, setLogin] = useAtom(loginAtom);

  useEffect(() => {
    const loginItem = localStorage.getItem("login") as string;
    console.log(loginItem);
    if (loginItem && JSON.parse(loginItem)?.id !== 0) {
      router.push("/mypage");
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      const { email, password } = data;
      const res = await axios.post("http://localhost:3000/api/signin", {
        email: email,
        password: password,
      });

      if (res.status === 200) {
        localStorage.setItem("login", JSON.stringify(res.data));
        setLogin(JSON.parse(localStorage.getItem("login") || ""));
        router.push("/mypage");
      }
    } catch (e) {
      console.log(e);
      alert("Login failed");
    }
  };
  return (
    <div
      className="h-screen w-screen flex items-center justify-center font-sans bg-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Card className="flex flex-col gap-4 w-[400px] ">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sign-in
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="my-2 block pl-1">
              <label
                htmlFor="email"
                className={
                  !errors.email
                    ? "border-gray-300 text-sm"
                    : "text-red-600 text-sm"
                }
              >
                Email
              </label>
            </div>
            <input
              id="email"
              type="text"
              placeholder="suh0419@gmail.com"
              className={
                !errors.email
                  ? "border-1 w-full border-gray-300  rounded-lg bg-white text-sm "
                  : "border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm"
              }
              {...register("email", {
                required: {
                  value: true,
                  message: "Requried",
                },
              })}
            />
            <p className={!errors ? "" : "text-red-600 text-sm mt-1 pl-1"}>
              {errors.email?.message}
            </p>
          </div>

          <div>
            <div className="my-2 block pl-1">
              <label
                htmlFor="password1"
                className={
                  !errors.password
                    ? "border-gray-300 text-sm"
                    : "text-red-600 text-sm"
                }
              >
                Password
              </label>
            </div>
            <input
              id="password1"
              type="password"
              className={
                !errors.password
                  ? "border-1 w-full border-gray-300  rounded-lg bg-white text-sm "
                  : "border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm"
              }
              {...register("password", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <p className={!errors ? "" : "text-red-600 text-sm mt-2 pl-1"}>
              {errors.password?.message}
            </p>
          </div>
          <Button className="mt-4" type="submit" disabled={!isValid}>
            {isValid ? "Sign-in" : "Enter your email and password to Sign-in"}
          </Button>
        </form>

        <Link href="/signup">
          <Button className="">Do not have account?</Button>
        </Link>
      </Card>
    </div>
  );
}
