import { cn } from '@/ui/utils/styles';
import React from 'react';

const toggleButtonColors = {
	primary: 'bg-primary text-white hover:bg-primary',
	secondary: 'bg-secondary text-white hover:bg-secondary',
	danger: 'bg-danger text-white hover:bg-danger',
	warning: 'bg-warning text-white hover:bg-warning',
	success: 'bg-success text-white hover:bg-success',
	info: 'bg-info text-white hover:bg-info',
	link: 'bg-link text-link hover:bg-link',
	neutral: 'bg-hint text-text-primary hover:bg-hint',
};

export interface ToggleButtonProps extends React.ComponentPropsWithRef<'button'> {
	active?: boolean;
	color?: keyof typeof toggleButtonColors;
}

export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
	({ children, className, color = 'neutral', active, ...rest }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'cursor-pointer flex transition hover:bg-hint rounded-md items-center h-7 outline-none focus:outline-none focus-visible:ring focus-visible:ring-link px-2 justify-center',
					{
						[toggleButtonColors[color]]: active,
					},
					className
				)}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

ToggleButton.displayName = 'ToggleButton';
