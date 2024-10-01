'use client';

import { cn } from '@/ui/utils/styles';
import React from 'react';

export type TabsContextType = {
	value: string;
	onValueChange: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextType>({
	value: '',
	onValueChange: () => {},
});

export const useTabs = () => React.useContext(TabsContext);

export interface TabsProps extends React.ComponentPropsWithRef<'div'> {
	value: string;
	onValueChange: (value: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({ children, value, onValueChange, className, ...rest }, ref) => {
	const val = {
		value,
		onValueChange,
	};

	return (
		<TabsContext.Provider value={val}>
			<div ref={ref} {...rest} className={className}>
				{children}
			</div>
		</TabsContext.Provider>
	);
});

Tabs.displayName = 'Tabs';

export const TabList = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div ref={ref} {...rest} className={cn('h-9 flex gap-1 bg-hint dark:bg-hint-dark rounded-md p-1', className)}>
				{children}
			</div>
		);
	}
);

TabList.displayName = 'TabsList';

export interface TabProps extends React.ComponentPropsWithRef<'button'> {
	value: string;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(({ children, value, className, ...rest }, ref) => {
	const { value: contextValue, onValueChange } = useTabs();

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onValueChange(value);
		}
	};

	return (
		<button
			ref={ref}
			{...rest}
			onClick={() => onValueChange(value)}
			onKeyDown={handleKeyDown}
			className={cn(
				'h-7 px-2 grow rounded outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-focus dark:focus-visible:ring-focus-dark transition font-medium',
				{
					'bg-white shadow dark:bg-background-dark text-text-primary  dark:text-text-primary-dark':
						contextValue === value,
					'text-text-secondary dark:text-text-secondary-dark': contextValue !== value,
				},
				className
			)}
		>
			{children}
		</button>
	);
});

Tab.displayName = 'Tab';

export interface TabPanelProps extends React.ComponentPropsWithRef<'div'> {
	value: string;
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({ children, className, value, ...rest }, ref) => {
	const { value: contextValue } = useTabs();

	if (contextValue !== value) {
		return null;
	}

	return (
		<div ref={ref} {...rest} className={cn('animate-fade-in', className)}>
			{children}
		</div>
	);
});

TabPanel.displayName = 'TabPanel';
