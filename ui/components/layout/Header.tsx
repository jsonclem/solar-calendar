import { cn } from '@/ui/utils/styles';
import React from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	sticky?: boolean;
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({ children, sticky, className, ...rest }, ref) => {
	const headerStyles = cn(
		'h-14 border-b border-separator',
		{
			'sticky top-0 z-50': sticky,
		},
		className
	);

	return (
		<header ref={ref} {...rest} className={headerStyles}>
			{children}
		</header>
	);
});

Header.displayName = 'Header';
