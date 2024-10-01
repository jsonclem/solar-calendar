import React from 'react';
import { LinkIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/16/solid';
import { cn } from '@/ui/utils/styles';

export type ModelTabsContextType = {
	value: string | number;
	onValueChange: (value: string | number) => void;
};

const ModelTabsContext = React.createContext<ModelTabsContextType>({
	value: '',
	onValueChange: () => {},
});

export const useModelTabs = () => React.useContext(ModelTabsContext);

export interface ModelTabsProps extends React.ComponentPropsWithRef<'div'> {
	value: string | number;
	onValueChange: (value: string | number) => void;
}

export const ModelTabs = React.forwardRef<HTMLDivElement, ModelTabsProps>(
	({ children, value, onValueChange, className, ...rest }, ref) => {
		const val = {
			value,
			onValueChange,
		};

		return (
			<ModelTabsContext.Provider value={val}>
				<div ref={ref} {...rest} className={className}>
					{children}
				</div>
			</ModelTabsContext.Provider>
		);
	}
);

ModelTabs.displayName = 'ModelTabs';

export const ModelTabList = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div ref={ref} {...rest} className={cn('flex flex-wrap items-center', className)}>
				{children}
			</div>
		);
	}
);

ModelTabList.displayName = 'ModelTabsList';

export interface ModelTabProps extends React.ComponentPropsWithRef<'button'> {
	value: string | number;
}

export const ModelTab = React.forwardRef<HTMLButtonElement, ModelTabProps>(({ children, value, className, ...rest }, ref) => {
	const { value: activeValue, onValueChange } = useModelTabs();

	return (
		<button
			ref={ref}
			{...rest}
			className={cn(
				'bg-hint transition flex items-center animate-fade-in py-2 px-5 font-medium text-text-primary leading-none rounded-full',
				{
					'text-white bg-primary': activeValue === value,
				},
				className
			)}
			onClick={() => onValueChange(value)}
		>
			{children}
		</button>
	);
});

ModelTab.displayName = 'ModelTab';

export const ModelTabConnection = () => {
	return (
		<>
			<div className="h-[1px] bg-input w-3"></div>
			<div className="h-6 w-6 flex text-link items-center justify-center rounded-full border border-input">
				<LinkIcon className="h-4" />
			</div>
			<div className="h-[1px] bg-input w-3"></div>
		</>
	);
};

ModelTabConnection.displayName = 'ModelTabConnection';

export const AddModelTab = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(
	({ className, ...rest }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'h-5 w-5 ml-2 text-text-secondary flex items-center justify-center rounded-full border border-input hover:border-link transition hover:text-link',
					className
				)}
				{...rest}
			>
				<PlusIcon className="h-3" />
			</button>
		);
	}
);

AddModelTab.displayName = 'AddModelTab';

export interface TabPanelProps extends React.ComponentPropsWithRef<'div'> {
	value: string | number;
}

export const ModelTabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({ children, className, value, ...rest }, ref) => {
	const { value: contextValue } = useModelTabs();

	if (contextValue !== value) {
		return null;
	}

	return (
		<div ref={ref} className={cn('animate-fade-in relative', className)} {...rest}>
			{children}
		</div>
	);
});

ModelTabPanel.displayName = 'ModelTabPanel';
