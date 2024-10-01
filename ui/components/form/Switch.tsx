import { cn } from '@/ui/utils/styles';
import React from 'react';

export const switchColors = {
	primary: 'bg-primary dark:bg-primary-dark',
	secondary: 'bg-secondary dark:bg-secondary-dark',
	success: 'bg-success dark:bg-success-dark',
	danger: 'bg-danger dark:bg-danger-dark',
	warning: 'bg-warning dark:bg-warning-dark',
	info: 'bg-info dark:bg-info-dark',
	link: 'bg-link dark:bg-link-dark',
};

export interface SwitchProps extends React.ComponentPropsWithRef<'button'> {
	checked: boolean;
	onValueChange: (checked: boolean) => void;
	name?: string;
	thumbClassName?: string;
	color?: keyof typeof switchColors;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
	({ className, checked, name, thumbClassName, color = 'primary', onValueChange, ...rest }, ref) => {
		const handleKeyDown = (event: React.KeyboardEvent) => {
			if (event.key === ' ' || event.key === 'Enter') {
				event.preventDefault();
				onValueChange(!checked);
			}
		};

		return (
			<>
				<input type="checkbox" className="hidden" name={name} checked={checked} onChange={() => {}} />
				<button
					ref={ref}
					role="checkbox"
					aria-checked={checked}
					className={cn(
						'h-5 p-0.5 w-9 outline-none focus:outline-none focus-visible:ring focus-visible:ring-focus dark:focus-visible:ring-focus-dark relative rounded-full transition-all',
						{
							[switchColors[color]]: checked,
							'bg-separator dark:bg-sepatator-dark': !checked,
						},
						className
					)}
					{...rest}
					onClick={() => onValueChange(!checked)}
					onKeyDown={handleKeyDown}
				>
					<div
						className={cn('w-4 h-4 transition-all shadow bg-white top-0.5 absolute rounded-full', thumbClassName, {
							'left-0.5': !checked,
							'left-[18px]': checked,
						})}
					/>
				</button>
			</>
		);
	}
);

Switch.displayName = 'Switch';
