import React from 'react';
import { cn } from '@/ui/utils/styles';

export interface RadioProps extends React.ComponentPropsWithRef<'button'> {
	checked: boolean;
	onValueChange: (checked: boolean) => void;
	name: string;
}

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
	({ checked, onValueChange, className, name, ...rest }, ref) => {
		const handleKeyDown = (event: React.KeyboardEvent) => {
			if (event.key === ' ' || event.key === 'Enter') {
				event.preventDefault();
				onValueChange(!checked);
			}
		};

		const checkboxStyles = cn(
			'relative flex items-center text-text-primary focus-visible:ring-1 focus:outline-none focus-visible:ring-focus dark:focus-visible:ring-focus-dark justify-center cursor-pointer h-4 w-4 rounded-full border border-primary transition dark:border-primary-dark',
			className
		);

		return (
			<>
				<input type="radio" className="hidden" name={name} checked={checked} onChange={() => {}} />
				<button
					ref={ref}
					role="radio"
					aria-checked={checked}
					tabIndex={0}
					onClick={() => onValueChange(!checked)}
					onKeyDown={handleKeyDown}
					className={checkboxStyles}
					{...rest}
				>
					{checked && (
						<div className="rounded-full bg-primary h-2.5 w-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
					)}
				</button>
			</>
		);
	}
);

Radio.displayName = 'Radio';
