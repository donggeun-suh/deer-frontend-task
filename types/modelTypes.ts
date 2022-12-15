export type Post = {
    id?: number;
    title: string;
    content: string;
    userId?: number;
};

export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
};
