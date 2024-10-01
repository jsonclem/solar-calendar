'use client';

import React, { createContext, useContext } from 'react';
import { cn } from '@/ui/utils/styles';
import { useDropdown } from '@/ui/hooks/useDropdown';

export type DropdownContextType = {
	dropdown: boolean;
	toggleDropdown: () => void;
	dropRef: React.RefObject<HTMLDivElement>;
	setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropdownContext = createContext<DropdownContextType>({
	dropdown: false,
	toggleDropdown: () => {},
	dropRef: { current: null },
	setDropdown: () => {},
});

const useDropdownComp = () => useContext(DropdownContext);

export interface DropdownProps extends React.ComponentPropsWithRef<'div'> {}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(({ children, className, ...rest }, ref) => {
	const value = useDropdown();

	return (
		<DropdownContext.Provider value={value}>
			<div ref={ref || value.dropRef} {...rest} className={cn('relative', className)}>
				{children}
			</div>
		</DropdownContext.Provider>
	);
});

Dropdown.displayName = 'Dropdown';

export type DropdownTriggerProps = {
	children: React.ReactElement;
};

export const DropdownTrigger = ({ children }: DropdownTriggerProps) => {
	const { toggleDropdown } = useDropdownComp();

	const childWithProps = React.isValidElement(children)
		? React.cloneElement(children as React.ReactElement<any>, {
				onClick: toggleDropdown,
			})
		: children;

	return childWithProps;
};

DropdownTrigger.displayName = 'DropdownTrigger';

export const DropdownContent: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className, ...rest }) => {
	const { dropdown } = useDropdownComp();

	if (!dropdown) {
		return null;
	}

	return (
		<div
			className={cn(
				'rounded-md animate-fade-in absolute overflow-y-auto p-1 min-w-44 z-50 w-full shadow-md border bg-background dark:bg-background-dark top-full mt-1 border-input dark:border-input-dark max-h-96 right-0',
				className
			)}
			{...rest}
		>
			{children}
		</div>
	);
};

DropdownContent.displayName = 'DropdownContent';

export interface DropdownItemProps extends React.ComponentPropsWithRef<'div'> {
	onClick?: () => void;
	closeOnClick?: boolean;
}

export const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
	({ className, closeOnClick, children, onClick, ...rest }, ref) => {
		const { setDropdown } = useDropdownComp();

		const handleSelect = () => {
			if (onClick) {
				onClick();
			}
			if (closeOnClick) {
				setDropdown(false);
			}
		};

		return (
			<div
				ref={ref}
				onClick={handleSelect}
				className={cn(
					'cursor-pointer whitespace-nowrap relative flex items-center px-2 py-1.5 transition rounded-sm hover:bg-hint dark:hover:bg-hint-dark',
					className
				)}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

DropdownItem.displayName = 'DropdownItem';
