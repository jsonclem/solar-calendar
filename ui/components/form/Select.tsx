'use client';

import React, { useContext, createContext } from 'react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';
import { useDropdown } from '@/ui/hooks/useDropdown';

const buttonSizes = {
	xs: 'h-7',
	sm: 'h-8',
	md: 'h-9',
	lg: 'h-10',
};

export type SelectContextType = {
	value: string | string[];
	onValueChange: (value: string) => void;
	placeholder?: string;
	dropdown: boolean;
	type?: string;
	toggleDropdown: () => void;
};

const SelectContext = createContext<SelectContextType>({
	value: '',
	onValueChange: () => {},
	placeholder: '',
	dropdown: false,
	toggleDropdown: () => {},
});

export const useSelect = () => useContext(SelectContext);

export interface SelectProps extends React.ComponentPropsWithRef<'div'> {
	children?: React.ReactNode;
	placeholder?: string;
	className?: string;
	size?: keyof typeof buttonSizes;
	value: any;
	name?: string;
	type?: string;
	onValueChange: (value: string) => void;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
	const { value, placeholder, children, name, type, className, onValueChange, ...rest } = props;

	const { dropRef, dropdown, toggleDropdown } = useDropdown();

	const val = {
		value,
		onValueChange,
		placeholder,
		dropdown,
		type,
		toggleDropdown,
	};

	return (
		<SelectContext.Provider value={val}>
			<input type="hidden" value={value} name={name} />
			<div ref={ref || dropRef} {...rest} className={cn('relative', className)}>
				{children}
			</div>
		</SelectContext.Provider>
	);
});

Select.displayName = 'Select';

export interface SelectButtonProps extends React.ComponentPropsWithRef<'button'> {
	size?: keyof typeof buttonSizes;
	children?: React.ReactNode;
}

export const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
	({ className, children, size = 'md', ...rest }, ref) => {
		const { value, placeholder, dropdown, toggleDropdown } = useSelect();

		const handleKeyDown = (event: React.KeyboardEvent) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				toggleDropdown();
			}
		};

		const buttonVariants = cva(
			'rounded-md outline-none flex focus-visible:border-primary dark:focus-visible:border-primary-dark w-full focus:outline-none border text-text-primary dark:text-text-primary-dark border-input dark:border-input-dark px-4 items-center cursor-pointer relative transition-all',
			{
				variants: {
					size: buttonSizes,
				},
				defaultVariants: {
					size: 'md',
				},
			}
		);

		return (
			<button
				ref={ref}
				aria-haspopup="listbox"
				aria-expanded={dropdown ? 'true' : 'false'}
				onClick={toggleDropdown}
				className={cn(buttonVariants({ size }), className)}
				onKeyDown={handleKeyDown}
				{...rest}
			>
				{children || value || <span className="text-text-secondary-dark">{placeholder}</span>}
				<ChevronUpDownIcon className="ml-auto pl-3 h-3.5 text-secondary transition dark:text-secondary-dark" />
			</button>
		);
	}
);

SelectButton.displayName = 'SelectButton';

export const SelectContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ className, children, ...rest }, ref) => {
		const { dropdown } = useSelect();

		if (!dropdown) {
			return null;
		}

		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					'rounded-md animate-fade-in absolute overflow-auto p-1 min-w-44 z-50 w-full shadow-md border bg-background dark:bg-background-dark top-full mt-1 border-input dark:border-input-dark max-h-96',
					className
				)}
			>
				{children}
			</div>
		);
	}
);

SelectContent.displayName = 'SelectContent';

export interface SelectOptionProps extends React.ComponentPropsWithRef<'div'> {
	value: string;
}

export const SelectOption = React.forwardRef<HTMLDivElement, SelectOptionProps>(
	({ className, children, value, ...rest }, ref) => {
		const { onValueChange, toggleDropdown, value: selectedValue, type } = useSelect();

		function handleSelect() {
			onValueChange(value);
			if (type === 'multiselect') return;

			toggleDropdown();
		}

		const handleKeyDown = (event: React.KeyboardEvent) => {
			if (event.key === 'Enter') {
				handleSelect();
			}
		};

		return (
			<div
				ref={ref}
				onClick={handleSelect}
				onKeyDown={handleKeyDown}
				className={cn(
					'cursor-pointer relative flex items-center px-2 py-1.5 transition rounded-sm hover:bg-hint dark:hover:bg-hint-dark',
					className
				)}
				{...rest}
			>
				{children}

				{(value === selectedValue || (Array.isArray(selectedValue) && selectedValue?.includes(value))) && (
					<CheckIcon className="ml-auto h-3 text-primary dark:text-primary-dark" />
				)}
			</div>
		);
	}
);

SelectOption.displayName = 'SelectOption';
