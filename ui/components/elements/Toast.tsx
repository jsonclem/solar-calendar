import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';
import { forwardRef, useEffect, useState } from 'react';

const toastColors = {
	default: 'text-text-primary dark:text-text-primary-dark',
	primary: 'text-primary dark:text-primary-dark',
	secondary: 'text-secondary dark:text-secondary-dark',
	danger: 'text-danger dark:text-danger-dark',
	warning: 'text-warning dark:text-warning-dark',
	success: 'text-success dark:text-success-dark',
	info: 'text-info dark:text-info-dark',
};

export interface ToastType extends React.ComponentPropsWithRef<'div'> {
	color?: keyof typeof toastColors;
}

export const Toast = forwardRef<HTMLDivElement, ToastType>(({ children, color = 'default', className, ...rest }, ref) => {
	const toastVariants = cva(
		'fixed top-4 border border-input max-w-60 animate-fade-in right-4 bg-white transition dark:bg-separator-dark shadow-lg rounded-md p-3 z-50',
		{
			variants: {
				color: toastColors,
			},
			defaultVariants: {
				color: 'default',
			},
		}
	);

	return (
		<div ref={ref} className={cn(toastVariants({ color }), className)} {...rest}>
			{children}
		</div>
	);
});

Toast.displayName = 'Toast';

export const ToastTitle: React.FC<React.ComponentPropsWithoutRef<'h5'>> = ({ children, className, ...rest }) => {
	return (
		<h5 {...rest} className={cn('font-semibold transition', className)}>
			{children}
		</h5>
	);
};

export const ToastDescription: React.FC<React.ComponentPropsWithoutRef<'p'>> = ({ children, className, ...rest }) => {
	return (
		<p {...rest} className={cn('text-xs text-text-secondary', className)}>
			{children}
		</p>
	);
};

export const useToast = (timeout?: number): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
	const [showToast, setShowToast] = useState<boolean>(false);

	useEffect(() => {
		if (showToast) {
			const timer = setTimeout(() => {
				setShowToast(false);
			}, timeout || 3000);

			return () => clearTimeout(timer);
		}
	}, [showToast, timeout]);

	return [showToast, setShowToast];
};
