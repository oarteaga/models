import { QueryClient } from '@tanstack/react-query';
import React from 'react';
import { ApiClient, createHttpApi } from '../apiClient';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            networkMode: 'always',
        },
        mutations: {
            networkMode: 'always',
        },
    },
});

export function createApi(url: string) {
    return createHttpApi(queryClient, new URL(url));
}

export const RuntimeApiContext = React.createContext<ApiClient | null>(null);

export function useApi() {
    const api = React.useContext(RuntimeApiContext);

    if (!api) {
        throw new Error(`Missing api`);
    }

    return api
}