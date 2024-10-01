'use client';

import { cn } from '@/ui/utils/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export type PageTabsContextType = {
	value: string;
	onValueChange: (value: string) => void;
};

const PageTabsContext = React.createContext<PageTabsContextType>({
	value: '',
	onValueChange: () => {},
});

export const usePageTabs = () => React.useContext(PageTabsContext);

export interface PageTabsProps extends React.ComponentPropsWithRef<'div'> {
	value: string;
	onValueChange: (value: string) => void;
}

export const PageTabs = React.forwardRef<HTMLDivElement, PageTabsProps>(
	({ children, value, onValueChange, className, ...rest }, ref) => {
		const val = {
			value,
			onValueChange,
		};

		return (
			<PageTabsContext.Provider value={val}>
				<div ref={ref} {...rest} className={className}>
					{children}
				</div>
			</PageTabsContext.Provider>
		);
	}
);

PageTabs.displayName = 'PageTabs';

export const PageTabList = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				{...rest}
				className={cn('border-b border-separator relative dark:border-separator-dark flex gap-2', className)}
			>
				{children}
			</div>
		);
	}
);

PageTabList.displayName = 'PageTabList';

export interface PageTabProps extends React.ComponentPropsWithRef<'button'> {
	value: string;
}

export const PageTab = React.forwardRef<HTMLButtonElement, PageTabProps>(
	({ children, onClick, value, className, ...rest }, ref) => {
		const { value: activeValue, onValueChange } = usePageTabs();

		const handleKeyDown = (event: React.KeyboardEvent) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				onValueChange(value);
			}
		};

		const isActive = activeValue === value;

		return (
			<button
				ref={ref}
				{...rest}
				onKeyDown={handleKeyDown}
				className={cn(
					' text-text-secondary font-medium -bottom-[1px] border-transparent relative cursor-pointer px-5 pb-2 transition border-b-2',
					{
						'text-text-primary border-primary': isActive,
					},
					className
				)}
				onClick={onClick ? onClick : () => onValueChange(value)}
			>
				{children}
			</button>
		);
	}
);

PageTab.displayName = 'PageTab';

export type PageTabLinkProps = {
	className?: string;
	href: string;
	children: React.ReactNode;
	exact?: boolean;
};

export const PageTabLink: React.FC<PageTabLinkProps> = ({ children, className, exact, href }) => {
	const pathname = usePathname();
	let active = pathname.includes(href);

	if (exact) {
		active = pathname === href;
	}

	return (
		<Link
			href={href}
			className={cn(
				' text-text-secondary font-medium -bottom-[1px] border-transparent relative cursor-pointer px-5 pb-2 transition border-b-2',
				{
					'text-text-primary border-primary': active,
				},
				className
			)}
		>
			{children}
		</Link>
	);
};

PageTabLink.displayName = 'PageTabLink';

export interface PageTabPanelProps extends React.ComponentPropsWithRef<'div'> {
	value: string;
}

export const PageTabPanel = React.forwardRef<HTMLDivElement, PageTabPanelProps>(
	({ children, className, value, ...rest }, ref) => {
		const { value: contextValue } = usePageTabs();

		if (contextValue !== value) {
			return null;
		}

		return (
			<div ref={ref} {...rest} className={cn('animate-fade-in relative', className)}>
				{children}
			</div>
		);
	}
);

PageTabPanel.displayName = 'PageTabPanel';
