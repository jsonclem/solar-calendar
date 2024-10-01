'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';
import { type ConfigStore, createConfigStore } from '@/stores/config-store';
import { ZodSchema, infer as zodInfer } from 'zod';
import { useShallow } from 'zustand/react/shallow';

export const ConfigStoreContext = createContext<StoreApi<ConfigStore> | null>(null);

export interface ConfigStoreProps {
	schema: ZodSchema;
	defaultData: zodInfer<ZodSchema>;
	children: ReactNode;
}

export const Config = ({ children, schema, defaultData }: ConfigStoreProps) => {
	const storeRef = useRef<StoreApi<ConfigStore>>();
	if (!storeRef.current) {
		storeRef.current = createConfigStore(schema, defaultData);
	}

	return <ConfigStoreContext.Provider value={storeRef.current}>{children}</ConfigStoreContext.Provider>;
};

export const useConfig = <T,>(selector: (store: ConfigStore) => T): T => {
	const configStoreContext = useContext(ConfigStoreContext);

	if (!configStoreContext) {
		throw new Error(`useConfigStore must be use within ConfigStore`);
	}

	return useStore(configStoreContext, useShallow(selector));
};
