'use client';

import { cn } from '@/ui/utils/styles';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export type TooltipContextType = {
	showTooltip: boolean;
	rect: DOMRect | null;
};

const TooltipContext = createContext<TooltipContextType>({
	showTooltip: false,
	rect: null,
});

export const useTooltip = () => useContext(TooltipContext);

export interface TooltipProps extends React.ComponentPropsWithoutRef<'div'> {
	delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, className, delay = 750, ...rest }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [showTooltip, setShowTooltip] = useState(false);
	const [rect, setRect] = useState<DOMRect | null>(null);

	useEffect(() => {
		if (!ref.current) return;

		const elem = ref.current;

		let timeout:any;

		const onMouseEnter = () => {
			setRect(elem.getBoundingClientRect());
			timeout = setTimeout(() => {
				setShowTooltip(true);
			}, delay);
		};

		const onMouseLeave = () => {
			setRect(null);
			setShowTooltip(false);
		};

		elem.addEventListener('mouseenter', onMouseEnter);
		elem.addEventListener('mouseleave', onMouseLeave);

		return () => {
			elem?.removeEventListener('mouseenter', onMouseEnter);
			elem?.removeEventListener('mouseleave', onMouseLeave);
			clearTimeout(timeout);
		};
	}, [delay]);

	const value = {
		showTooltip,
		rect,
	};

	return (
		<TooltipContext.Provider value={value}>
			<div ref={ref} {...rest} className={cn('relative inline-block', className)}>
				{children}
			</div>
		</TooltipContext.Provider>
	);
};

Tooltip.displayName = 'Tooltip';

export interface TooltipContentProps extends React.ComponentPropsWithRef<'div'> {
	forceShow?: boolean;
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
	({ children, className, forceShow, ...rest }, ref) => {
		const { rect, showTooltip } = useTooltip();

		if (!showTooltip || !rect) return null;

		const style = {
			bottom: window.innerHeight - rect.top,
			left: rect.left + rect.width / 2,
		};

		return (
			<div
				ref={ref}
				{...rest}
				style={style}
				className={cn(
					'fixed mb-1 animate-fade-in rounded bg-text-primary -translate-x-1/2 shadow text-white text-xs px-2 py-1 z-50',
					className
				)}
			>
				{children}
			</div>
		);
	}
);

TooltipContent.displayName = 'TooltipContent';
