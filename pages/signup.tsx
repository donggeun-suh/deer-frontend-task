import { useForm } from "react-hook-form";
import { Button, Card } from "flowbite-react";
import { useRef } from "react";
import bg from "../public/planner.avif";
import axios from "axios";
import { useRouter } from "next/router";

type FormValues = {
  name: string;
  email: string;
  password1: string;
  password2: string;
};

const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      name: "",
      password1: "",
    },
  });
  const router = useRouter();

  const password = useRef("");
  password.current = watch("password1");

  const onSubmit = async (data: FormValues) => {
    try {
      const { name, email, password1 } = data;
      const res = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        password: password1,
      });
      console.log(res);
      if (res.status === 200) {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
      alert("Email already exists");
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center font-sans bg-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Card className="flex flex-col gap-4 w-[400px] ">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sign-up
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="my-2 block pl-1">
              <label
                htmlFor="name"
                className={
                  !errors.name
                    ? "border-gray-300 text-sm"
                    : "text-red-600 text-sm"
                }
              >
                Name
              </label>
            </div>
            <input
              id="name"
              type="text"
              placeholder="donggeun"
              className={
                !errors.name
                  ? "border-1 w-full border-gray-300  rounded-lg bg-white text-sm "
                  : "border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm"
              }
              {...register("name", {
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 3,
                  message: "Must be at least 3 letters",
                },
              })}
            />
            <p
              className={
                !errors.name ? "hidden" : "text-red-600 text-sm mt-1 pl-1"
              }
            >
              {errors.name?.message}
            </p>
          </div>
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
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/s,
                  message: "Not an email",
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
                  !errors.password1
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
                !errors.password1
                  ? "border-1 w-full border-gray-300  rounded-lg bg-white text-sm "
                  : "border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm"
              }
              {...register("password1", {
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be at least 6 letters",
                },
              })}
            />
            <p className={!errors ? "" : "text-red-600 text-sm mt-2 pl-1"}>
              {errors.password1?.message}
            </p>
          </div>
          <div>
            <div className="my-2 block pl-1">
              <label
                htmlFor="password2"
                className={
                  !errors.password2
                    ? "border-gray-300 text-sm"
                    : "text-red-600 text-sm"
                }
              >
                Confirm Password
              </label>
            </div>
            <input
              id="password2"
              type="password"
              className={
                !errors.password2
                  ? "border-1 w-full border-gray-300  rounded-lg bg-white text-sm "
                  : "border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm"
              }
              {...register("password2", {
                required: {
                  value: true,
                  message: "Required",
                },
                validate: {
                  passwordValidate: (value) => {
                    if (value === password.current) {
                      return true;
                    }
                    return "Password not confirmed";
                  },
                },
              })}
            />
            <p className={!errors ? "" : "text-red-600 text-sm mt-2 pl-1"}>
              {errors.password2?.message}
            </p>
          </div>

          <Button className="mt-6" type="submit" disabled={!isValid}>
            {isValid ? "Register new account" : "Form not completed"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
