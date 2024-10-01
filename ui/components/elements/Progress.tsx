import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';
import React from 'react';

const progressColors = {
	primary: 'bg-primary dark:bg-primary-dark',
	secondary: 'bg-secondary dark:bg-secondary-dark',
	danger: 'bg-danger dark:bg-danger-dark',
	warning: 'bg-warning dark:bg-warning-dark',
	success: 'bg-success dark:bg-success-dark',
	info: 'bg-info dark:bg-info-dark',
	link: 'bg-link dark:bg-link-dark',
};

export interface ProgressProps extends React.ComponentPropsWithRef<'div'> {
	percent: number;
	color?: keyof typeof progressColors;
	backgroundClassName?: string;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
	({ percent, className, backgroundClassName, color = 'primary', children, ...rest }, ref) => {
		const progressVariants = cva('h-2 transition rounded-full', {
			variants: {
				color: progressColors,
			},
			defaultVariants: {
				color: 'primary',
			},
		});

		return (
			<div
				ref={ref}
				{...rest}
				className={cn('h-2 transition relative rounded-full bg-hint dark:bg-hint-dark', backgroundClassName)}
			>
				<div className={cn(progressVariants({ color }), className)} style={{ width: `${percent}%` }} />
				{children}
			</div>
		);
	}
);

Progress.displayName = 'Progress';

export const ProgressStart = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					'absolute top-full mt-0.5 left-0 text-xs text-text-secondary dark:text-text-secondary-dark transition',
					className
				)}
			>
				{children}
			</div>
		);
	}
);

ProgressStart.displayName = 'ProgressStartLabel';

export const ProgressEnd = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					'absolute top-full mt-0.5 right-0 text-xs text-text-secondary dark:text-text-secondary-dark transition',
					className
				)}
			>
				{children}
			</div>
		);
	}
);

ProgressEnd.displayName = 'ProgressEnd';
