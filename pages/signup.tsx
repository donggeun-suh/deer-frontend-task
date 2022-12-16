import { useEffect } from 'react';
import bg from '../public/planner.avif';

import SignUpForm from '../components/SignUpForm';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter();
    useEffect(() => {
        const loginItem = localStorage.getItem('login') as string;
        console.log(loginItem);
        if (loginItem && JSON.parse(loginItem)?.id !== 0) {
            router.push('/mypage');
        }
    }, [router]);

    return (
        <div
            className="h-screen w-screen flex items-center justify-center font-sans bg-auto"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <SignUpForm />
        </div>
    );
};

export default SignUp;
