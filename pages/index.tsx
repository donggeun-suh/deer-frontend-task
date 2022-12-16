import { useEffect } from 'react';
import bg from '../public/planner.avif';
import { useRouter } from 'next/router';
import SignInForm from '../components/SignInForm';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const loginItem = localStorage.getItem('login') as string;
        console.log(loginItem);
        if (loginItem && JSON.parse(loginItem)?.id !== 0) {
            router.push('/mypage?page=1');
        }
    }, [router]);

    return (
        <div
            className="h-screen w-screen flex items-center justify-center font-sans bg-auto"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <SignInForm />
        </div>
    );
}
