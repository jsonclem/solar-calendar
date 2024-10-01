import { cn } from '@/ui/utils/styles';
import React from 'react';

export const PageTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithRef<'h1'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<h1 ref={ref} {...rest} className={cn('text-3xl font-extrabold', className)}>
				{children}
			</h1>
		);
	}
);

PageTitle.displayName = 'PageTitle';

export const PageTitleIcon = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					'w-9 h-9 mr-2 rounded-md ring ring-accent/30 shadow text-white text-base font-bold bg-primary flex justify-center items-center',
					className
				)}
			>
				{children}
			</div>
		);
	}
);

PageTitleIcon.displayName = 'PageTitleIcon';
