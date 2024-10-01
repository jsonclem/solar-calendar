import React from 'react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { cn } from '@/ui/utils/styles';

export interface CheckboxProps extends React.ComponentPropsWithRef<'button'> {
	checked: boolean;
	onValueChange: (checked: boolean) => void;
	name?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
	({ checked, onValueChange, className, name, ...rest }, ref) => {
		const handleKeyDown = (event: React.KeyboardEvent) => {
			if (event.key === ' ' || event.key === 'Enter') {
				event.preventDefault();
				onValueChange(!checked);
			}
		};

		const checkboxStyles = cn(
			'flex items-center text-white focus-visible:ring-1 focus:outline-none focus-visible:ring-focus dark:focus-visible:ring-focus-dark justify-center cursor-pointer h-4 w-4 rounded-sm border border-primary transition dark:border-primary-dark',
			{
				'bg-primary dark:bg-primary-dark': checked,
			},
			className
		);

		return (
			<>
				<input type="checkbox" className="hidden" name={name} checked={checked} onChange={() => {}} />
				<button
					ref={ref}
					role="checkbox"
					aria-checked={checked}
					tabIndex={0}
					onClick={() => onValueChange(!checked)}
					onKeyDown={handleKeyDown}
					className={checkboxStyles}
					{...rest}
				>
					{checked && <CheckIcon className="h-3 w-3" />}
				</button>
			</>
		);
	}
);

Checkbox.displayName = 'Checkbox';
