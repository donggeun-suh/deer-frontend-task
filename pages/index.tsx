import Form from "../components/Form";
import { Navbar } from "flowbite-react";
import PostList from "../components/PostList";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function Home() {
  return (
    <div className="bg-blue-900 h-screen flex items-center justify-center">
      <div className="bg-purple-900 w-1/2 h-1/2"></div>
    </div>
  );
}
