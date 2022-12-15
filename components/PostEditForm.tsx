import { Card, Button } from 'flowbite-react';
import { useAtom } from 'jotai';

import { useForm } from 'react-hook-form';
import { updatePost } from '../endpoints/postAPI';
import { loginAtom, pageAtom } from '../stores/stores';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PostDataType } from '../types/dataTypes';
import { useRouter } from 'next/router';
import ButtonAlter from './ButtonAlter';
import BaseCard from './BaseCard';

type FormValues = {
    title: string;
    content: string;
};

interface postEditFormProps {
    id: number;
    data: PostDataType;
}

const PostEditForm = (props: postEditFormProps) => {
    const { id, data } = props;
    const router = useRouter();
    const [page] = useAtom(pageAtom);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormValues>({
        mode: 'all',
        defaultValues: {
            title: data?.title,
            content: data?.content,
        },
    });

    const [login] = useAtom(loginAtom);

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: (data: FormValues) => {
            const newPost = {
                title: data?.title,
                content: data?.content,
                userId: login.id,
            };
            return updatePost(newPost, id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['posts', id]);
            queryClient.invalidateQueries(['myPosts', login.id, page]);
            router.push(`/posts/${id}`);
        },
    });
    console.log(data);

    const onSubmit = (data: FormValues) => {
        mutate(data);
    };
    return (
        <BaseCard className="flex flex-col gap-4 mt-4 max-w-[1024px] ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`Edit Post #${id}`}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="my-2 block pl-1">
                        <label
                            htmlFor="title"
                            className={!errors.title ? 'border-gray-300 text-sm' : 'text-red-600 text-sm'}
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
                                ? 'border-1 w-full border-gray-300  rounded-lg bg-white text-sm '
                                : 'border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm'
                        }
                        {...register('title', {
                            required: {
                                value: true,
                                message: 'Required',
                            },
                        })}
                    />
                    <p className={!errors.title ? 'hidden' : 'text-red-600 text-sm mt-1 pl-1'}>
                        {errors.title?.message}
                    </p>
                </div>
                <div>
                    <div className="my-2 block pl-1">
                        <label
                            htmlFor="content"
                            className={!errors.content ? 'border-gray-300 text-sm' : 'text-red-600 text-sm'}
                        >
                            Content
                        </label>
                    </div>
                    <textarea
                        id="content"
                        placeholder="Please write your content !!!"
                        rows={10}
                        style={{ resize: 'none' }}
                        className={
                            !errors.content
                                ? 'border-1 w-full border-gray-300  rounded-lg bg-white text-sm '
                                : 'border-2 w-full border-rose-600 rounded-lg bg-rose-200 text-red-600 text-sm'
                        }
                        {...register('content', {
                            required: {
                                value: true,
                                message: 'Requried',
                            },
                        })}
                    />
                    <p className={!errors ? '' : 'text-red-600 text-sm mt-1 pl-1'}>{errors.content?.message}</p>
                </div>

                <ButtonAlter className="mt-6" type="submit" disabled={!isValid}>
                    {isValid ? 'Edit' : 'Form not completed'}
                </ButtonAlter>
            </form>
        </BaseCard>
    );
};

export default PostEditForm;
