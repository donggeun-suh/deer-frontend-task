export const LoginEmailValidation = {
    required: {
        value: true,
        message: 'Requried',
    },
};

export const LoginPasswordValidation = {
    required: {
        value: true,
        message: 'Required',
    },
};

export type signInFormValues = {
    email: string;
    password: string;
};
