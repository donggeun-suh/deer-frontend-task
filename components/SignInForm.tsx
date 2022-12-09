import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import {
  LoginEmailValidation,
  LoginPasswordValidation,
  signInFormValues,
} from "../types/signInValidationInterface";
import { SignIn } from "../endpoints/authAPI";
import { loginAtom } from "../stores/stores";
import { useRouter } from "next/router";
import { Card, Button } from "flowbite-react";
import Link from "next/link";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<signInFormValues>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [, setLogin] = useAtom(loginAtom);

  const onSubmit = async (data: signInFormValues) => {
    const res = await SignIn(data);
    if (res?.status === 200) {
      await localStorage.setItem("login", JSON.stringify(res?.data));
      await setLogin(JSON.parse(localStorage.getItem("login") as string));
      router.push("/mypage");
    }
  };

  return (
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
            {...register("email", LoginEmailValidation)}
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
            {...register("password", LoginPasswordValidation)}
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
  );
};

export default SignInForm;
