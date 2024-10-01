import React from 'react';
import { cn } from '@/ui/utils/styles';

export const Prose = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div ref={ref} {...rest} className={cn('prose prose-sm max-w-none', className)}>
				{children}
			</div>
		);
	}
);

Prose.displayName = 'Prose';
