import { signInFormValues } from './../types/signInValidationInterface';
import { signUpFormValues } from './../types/signUpValidationInterfaces';
import axios from 'axios';

export const SignUp = async (data: signUpFormValues) => {
    try {
        const { name, email, password1 } = data;
        const res = await axios.post('http://localhost:3000/api/signup', {
            name,
            email,
            password: password1,
        });
        const { status } = await res;
        return status;
    } catch (e) {
        console.log(e);
        alert('Email already exists');
    }
};

export const SignIn = async (data: signInFormValues) => {
    try {
        const { email, password } = data;
        const res = await axios.post('https://deer-frontend-task.vercel.app/api/signin', {
            email: email,
            password: password,
        });
        return res;
    } catch (e) {
        console.log(e);
        alert('Login failed');
    }
};
