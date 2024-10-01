import React from 'react';
import { cn } from '@/ui/utils/styles';

export interface FooterProps extends React.ComponentPropsWithRef<'div'> {
	sticky?: boolean;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(({ children, sticky, className, ...rest }, ref) => {
	const headerStyles = cn(
		'h-14 bg-hint',
		{
			'sticky bottom-0 z-10': sticky,
		},
		className
	);

	return (
		<footer ref={ref} {...rest} className={headerStyles}>
			{children}
		</footer>
	);
});

Footer.displayName = 'Header';
