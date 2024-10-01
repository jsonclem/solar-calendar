import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { cn } from '@/ui/utils/styles';

export interface SelectableCardProps extends React.HTMLAttributes<HTMLButtonElement> {
	checked: boolean;
	onValueChange: (checked: boolean) => void;
	name?: string;
	type?: 'checkbox' | 'radio';
	hideCheck?: boolean;
}

export const SelectableCard = React.forwardRef<HTMLButtonElement, SelectableCardProps>((props, ref) => {
	const { checked, children, hideCheck, className, name, onValueChange, type = 'checkbox', ...rest } = props;

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === ' ' || event.key === 'Enter') {
			event.preventDefault();
			onValueChange(!checked);
		}
	};

	return (
		<>
			<input type={type} className="hidden" name={name} checked={checked} onChange={() => {}} />
			<button
				ref={ref}
				role={type}
				aria-checked={checked}
				tabIndex={0}
				onClick={() => onValueChange(!checked)}
				onKeyDown={handleKeyDown}
				className={cn(
					'rounded-md w-full text-left outline-none focus:outline-none focus-visible:outline focus-visible:outline-focus border dark:focus-visible:outline-focus-dark relative dark:border-input-dark transition-all',
					{
						'border-primary dark:border-primary-dark ring-1 ring-primary dark:ring-primary-dark shadow shadow-link':
							checked,
						'border-input dark:border-input-dark': !checked,
					},
					className
				)}
				{...rest}
			>
				{children}
				{checked && !hideCheck ? <CheckCircleIcon className="h-5 animate-fade-in absolute top-1 right-1" /> : null}
			</button>
		</>
	);
});

SelectableCard.displayName = 'SelectableCard';
