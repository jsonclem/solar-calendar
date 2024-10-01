import { cn } from '@/ui/utils/styles';
import React from 'react';

export const Separator = React.forwardRef<HTMLHRElement, React.ComponentPropsWithRef<'hr'>>(
	({ className, children, ...rest }, ref) => {
		return (
			<div className="relative">
				<hr
					ref={ref}
					{...rest}
					className={cn('border-t border-separator dark:border-separator-dark transition', className)}
				/>
				{children}
			</div>
		);
	}
);

Separator.displayName = 'HorizontalRule';

export const ArrowDown = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(({ className, ...rest }, ref) => {
	return (
		<div
			ref={ref}
			{...rest}
			className={cn(
				'h-3 w-3 border-r border-b border-separator absolute left-1/2 -translate-x-1/2 rotate-45 top-1/2 -translate-y-1/2 bg-background dark:bg-background-dark',
				className
			)}
		/>
	);
});

ArrowDown.displayName = 'ArrowDown';
