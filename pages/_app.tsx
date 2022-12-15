import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Provider } from 'jotai';

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <Provider>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </Hydrate>
            </QueryClientProvider>
        </Provider>
    );
}
