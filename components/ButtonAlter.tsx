import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonAlter = ({ children, className, ...props }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <button
            type="button"
            className={clsx(
                'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
                className,
                { 'opacity-50': props.disabled },
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonAlter;
