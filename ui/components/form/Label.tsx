import React from 'react';
import { cn } from '@/ui/utils/styles';

export const Label = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithRef<'label'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<label ref={ref} {...rest} className={cn('block font-medium', className)}>
				{children}
			</label>
		);
	}
);

Label.displayName = 'Label';
