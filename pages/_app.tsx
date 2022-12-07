import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  useQueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useEffect } from "react";
import { Provider, useAtom } from "jotai";
import { loginAtom } from "../stores/stores";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
