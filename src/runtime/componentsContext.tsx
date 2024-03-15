import * as React from 'react';
import { createProvidedContext } from '@ebavel/utils';
import { EbavelComponents, EbavelComponent } from '../'
import { createToolpadComponentThatThrows } from './runtime'

const [useComponents, ComponentsContextProvider] =
    createProvidedContext<EbavelComponents>('Components');

export { useComponents, ComponentsContextProvider };

export function useComponent(type: string): EbavelComponent {
    const components = useComponents();
    return React.useMemo(() => {
        return (
            components?.[type] ??
            createToolpadComponentThatThrows(new Error(`Can't find component for "${type}"`))
        );
    }, [components, type]);
}