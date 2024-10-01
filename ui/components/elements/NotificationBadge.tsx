import { cn } from '@/ui/utils/styles';
import React from 'react';

export const NotificationBadge = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					'relative items-center px-1 justify-center min-w-[16px] h-4 text-xs font-semibold text-white rounded-full inline-flex bg-danger dark:bg-danger-dark',
					className
				)}
			>
				{children}
			</div>
		);
	}
);

NotificationBadge.displayName = 'NotificationBadge';
