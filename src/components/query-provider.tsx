"use client";

import * as React from "react";
import {
  isServer,
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
  QueryClientProviderProps,
} from "@tanstack/react-query";

interface QueryProviderProps
  extends Pick<QueryClientProviderProps, "children"> {}

const config: QueryClientConfig = {
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
};

const makeQueryClient = () => {
  return new QueryClient(config);
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) return makeQueryClient();
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
};

export default function QueryProvider(props: QueryProviderProps) {
  const { children } = props;
  const queryClient = getQueryClient();

  queryClient.getQueryCache().config.onError = (_error, _query) => {};

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
