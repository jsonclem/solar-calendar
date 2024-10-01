import { cn } from '@/ui/utils/styles';
import React from 'react';

export const Card = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => (
		<div
			ref={ref}
			className={cn('rounded-md border-input border relative dark:border-input-dark transition-all', className)}
			{...rest}
		>
			{children}
		</div>
	)
);

Card.displayName = 'Card';
