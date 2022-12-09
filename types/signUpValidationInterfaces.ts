export const NameValidation = {
  required: {
    value: true,
    message: "Required",
  },
  minLength: {
    value: 3,
    message: "Must be at least 3 letters",
  },
};

export const EmailValidation = {
  required: {
    value: true,
    message: "Requried",
  },
  pattern: {
    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/s,
    message: "Not an email",
  },
};

export const PasswordValidation = {
  required: {
    value: true,
    message: "Required",
  },
  minLength: {
    value: 6,
    message: "Must be at least 6 letters",
  },
};

export type signUpFormValues = {
  name: string;
  email: string;
  password1: string;
  password2: string;
};
