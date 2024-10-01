import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';
import React from 'react';

const statusDotColors = {
	primary: 'bg-primary dark:bg-primary-dark ring-primary/20',
	secondary: 'bg-secondary dark:bg-secondary-dark ring-secondary/20',
	success: 'bg-success dark:bg-success-dark ring-success/20',
	danger: 'bg-danger dark:bg-danger-dark ring-danger/20',
	warning: 'bg-warning dark:bg-warning-dark ring-warning/20',
	info: 'bg-info dark:bg-info-dark ring-info/20',
};

const statusDotSizes = {
	sm: 'h-2 w-2',
	md: 'h-3 w-3',
	lg: 'h-4 w-4',
};

export interface StatusDotProps extends React.ComponentPropsWithRef<'div'> {
	size?: keyof typeof statusDotSizes;
	color?: keyof typeof statusDotColors;
}

export const StatusDot = React.forwardRef<HTMLDivElement, StatusDotProps>(
	({ className, size = 'sm', color = 'success', ...rest }, ref) => {
		const statusDotVariants = cva('rounded-full transition ring-2', {
			variants: {
				size: statusDotSizes,
				color: statusDotColors,
			},
			defaultVariants: {
				size: 'sm',
				color: 'success',
			},
		});

		return <div ref={ref} {...rest} className={cn(statusDotVariants({ size, color }), className)} />;
	}
);

StatusDot.displayName = 'StatusDot';
