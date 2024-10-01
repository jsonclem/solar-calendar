import React from 'react';
import { cn } from '@/ui/utils/styles';

export const EmptyState = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }) => {
		return (
			<div
				{...rest}
				className={cn('rounded-md bg-separator relative transition dark:bg-separator-dark p-3 text-center', className)}
			>
				{children}
			</div>
		);
	}
);

EmptyState.displayName = 'EmptyState';

export const EmptyStateTitle: React.FC<React.ComponentPropsWithoutRef<'h3'>> = ({ children, className, ...rest }) => (
	<h3 {...rest} className={cn('font-semibold text-text-primary mt-1', className)}>
		{children}
	</h3>
);

export const EmptyStateDescription: React.FC<React.ComponentPropsWithoutRef<'p'>> = ({ children, className, ...rest }) => (
	<p {...rest} className={cn('text-xs text-text-secondary', className)}>
		{children}
	</p>
);
