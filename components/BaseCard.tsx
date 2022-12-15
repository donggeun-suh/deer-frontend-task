import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BaseCard = ({ children, className, ...props }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <div
            className={clsx(
                'p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default BaseCard;
