import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';
import React from 'react';

const alertColors = {
	default: 'border-input dark:border-input-dark text-text-primary dark:text-text-primary-dark',
	primary: 'border-primary dark:border-primary-dark text-primary dark:text-primary-dark',
	secondary: 'border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark',
	danger: 'border-danger dark:border-danger-dark text-danger dark:text-danger-dark',
	warning: 'border-warning dark:border-warning-dark text-warning dark:text-warning-dark',
	success: 'border-success dark:border-success-dark text-success dark:text-success-dark',
	info: 'border-info dark:border-info-dark text-info dark:text-info-dark',
};

export interface AlertProps extends React.ComponentPropsWithRef<'div'> {
	color?: keyof typeof alertColors;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, children, color, ...rest }, ref) => {
	const alertVariants = cva('p-3 transition items-center border rounded-md relative', {
		variants: {
			color: alertColors,
		},
		defaultVariants: {
			color: 'default',
		},
	});

	const alertStyles = cn(alertVariants({ color }), className);

	return (
		<div ref={ref} {...rest} className={alertStyles}>
			{children}
		</div>
	);
});

Alert.displayName = 'Alert';

export const AlertTitle: React.FC<React.ComponentPropsWithoutRef<'h5'>> = ({ children, className, ...rest }) => {
	return (
		<h5 {...rest} className={cn('font-semibold transition', className)}>
			{children}
		</h5>
	);
};

export const AlertDescription: React.FC<React.ComponentPropsWithoutRef<'p'>> = ({ children, className, ...rest }) => {
	return (
		<p {...rest} className={cn('', className)}>
			{children}
		</p>
	);
};
