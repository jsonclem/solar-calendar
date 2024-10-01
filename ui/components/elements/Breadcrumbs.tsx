import Link from 'next/link';
import React from 'react';
import { cn } from '@/ui/utils/styles';

export interface BreadcrumbsProps extends React.ComponentPropsWithRef<'div'> {
	separator?: React.ReactNode;
}

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(({ children, className, ...rest }, ref) => {
	const arr = React.Children.toArray(children);
	const arrWithSeparators = arr.flatMap((child, index) => {
		return index === arr.length - 1 ? [child] : [child, '/'];
	});

	return (
		<div
			ref={ref}
			{...rest}
			className={cn(
				'flex gap-1 text-xs text-text-secondary dark:text-text-secondary-dark transition item-center',
				className
			)}
		>
			{arrWithSeparators}
		</div>
	);
});

Breadcrumbs.displayName = 'Breadcrumbs';

export interface CrumbProps extends React.ComponentPropsWithRef<'div'> {
	href: string;
}

export const Crumb = React.forwardRef<HTMLDivElement, CrumbProps>(({ children, href, className, ...rest }, ref) => {
	return (
		<div ref={ref} {...rest} className={cn('transition cursor-pointer hover:underline', className)}>
			<Link href={href}>{children}</Link>
		</div>
	);
});

Crumb.displayName = 'Crumb';
