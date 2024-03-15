import * as React from 'react';
import { EbavelDataProviderBase, PaginationMode } from "../types";
import { createComponent } from "../createComponent";
import { useQuery } from '@tanstack/react-query';
import invariant from 'invariant';
import { defaultProvider } from './dataprovider';


export function createToolpadComponentThatThrows(error: Error) {
    return createComponent(() => {
        throw error;
    });
}

export interface UseDataProviderHookResult<
    R extends Record<string, unknown>,
    P extends PaginationMode,
> {
    isLoading: boolean;
    error?: unknown;
    dataProvider: EbavelDataProviderBase<R, P> | null;
}

export interface UseDataProviderHook {
    <R extends Record<string, unknown>, P extends PaginationMode>(
        id?: string,
    ): UseDataProviderHookResult<R, P>;
}

export const UseDataProviderContext = React.createContext<UseDataProviderHook | null>(null);

type GridRowId = string | number

export const useDataProvider: UseDataProviderHook = (id) => {
    const {
        isLoading,
        error,
        data: introspection,
    } = useQuery({
        queryKey: ['introspectDataProvider', id],
        enabled: !!id,
        queryFn: async () => {
            invariant(id, 'id is required');
            //const [filePath, name] = id.split(':');
            //return runtimeApi.methods.introspectDataProvider(filePath, name);
            return defaultProvider
        },
    });

    const dataProvider: EbavelDataProviderBase<any, any> | null = React.useMemo(() => {
        if (!introspection) {
            return null;
        }
        return {
            paginationMode: introspection.paginationMode,
            providerId: id,
            getRecords: async (...args) => {
                invariant(id, 'id is required');
                const [filePath, name] = id.split(':');
                introspection.providerId = id
                return introspection.getRecords(...args)
                //return runtimeApi.methods.getDataProviderRecords(filePath, name, ...args);
            },
            deleteRecord: introspection.deleteRecord
                ? async (recordId: GridRowId) => {
                    invariant(id, 'id is required');
                    const [filePath, name] = id.split(':');
                    return introspection.deleteRecord && introspection.deleteRecord(recordId)
                }
                : undefined,
            updateRecord: introspection.updateRecord
                ? async (recordId: GridRowId, values: Record<string, unknown>) => {
                    invariant(id, 'id is required');
                    const [filePath, name] = id.split(':');
                    return introspection.updateRecord && introspection.updateRecord(recordId, values);
                }
                : undefined,
            createRecord: introspection.createRecord
                ? async (values: Record<string, unknown>) => {
                    invariant(id, 'id is required');
                    const [filePath, name] = id.split(':');
                    return introspection.createRecord && introspection.createRecord(values);
                }
                : undefined,
        };
    }, [id, introspection]);

    return { isLoading, error, dataProvider };
}