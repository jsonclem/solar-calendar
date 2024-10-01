import { cn } from '@/ui/utils/styles';
import React from 'react';

export const LoadingSpinner = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ className, ...rest }, ref) => (
		<div ref={ref} className={cn('inline-block animate-spin h-5', className)} {...rest}>
			<svg
				className="h-full"
				viewBox="0 0 26 26"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<g fill="none" strokeLinecap="round">
					<g transform="translate(-661.000000, -369.000000)" stroke="currentColor" strokeWidth={2}>
						<path d="M674,370 C667.372583,370 662,375.372583 662,382 C662,388.627417 667.372583,394 674,394 C680.627417,394 686,388.627417 686,382" />
					</g>
				</g>
			</svg>
		</div>
	)
);

LoadingSpinner.displayName = 'LoadingSpinner';
