import axios from "axios";
import { Card, Button } from "flowbite-react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { loginAtom } from "../stores/stores";

type FormValues = {
  title: string;
  content: string;
};

const BulletinBoard = ({
  totalRefetch,
  paginatedRefetch,
}: {
  totalRefetch: () => void;
  paginatedRefetch: () => void;
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const router = useRouter();
  const [login] = useAtom(loginAtom);

  const onSubmit = async (data: FormValues) => {
    try {
      const { title, content } = data;
      const res = await axios.post("http://localhost:3000/api/posts", {
        title: title,
        content: content,
        userId: login.id,
      });
      console.log(res);
      if (res.status === 200) {
        totalRefetch();
        paginatedRefetch();
        reset();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Card className="flex flex-col gap-4 w-2/3 ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bulletin Board
      </h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="my-2 block pl-1">
            <label
              htmlFor="title"
              className={
                !errors.title
                  ? "border-gray-300 text-sm"
                  : "text-red-600 text-sm"
              }
            >
              Title
            </label>
          </div>
          <input
            id="title"
            type="text"
            placeholder="Title"
            className={
              !errors.title
                ? "border-1 w-full border-gray-300  rounded-lg bg-white text-sm "
                : "border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm"
            }
            {...register("title", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          <p
            className={
              !errors.title ? "hidden" : "text-red-600 text-sm mt-1 pl-1"
            }
          >
            {errors.title?.message}
          </p>
        </div>
        <div>
          <div className="my-2 block pl-1">
            <label
              htmlFor="content"
              className={
                !errors.content
                  ? "border-gray-300 text-sm"
                  : "text-red-600 text-sm"
              }
            >
              Content
            </label>
          </div>
          <textarea
            id="content"
            placeholder="Please write your content !!!"
            rows={10}
            style={{ resize: "none" }}
            className={
              !errors.content
                ? "border-1 w-full border-gray-300  rounded-lg bg-white text-sm "
                : "border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm"
            }
            {...register("content", {
              required: {
                value: true,
                message: "Requried",
              },
            })}
          />
          <p className={!errors ? "" : "text-red-600 text-sm mt-1 pl-1"}>
            {errors.content?.message}
          </p>
        </div>

        <Button className="mt-6" type="submit" disabled={!isValid}>
          {isValid ? "Post" : "Form not completed"}
        </Button>
      </form>
    </Card>
  );
};

export default BulletinBoard;
