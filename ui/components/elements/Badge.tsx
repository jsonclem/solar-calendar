import React from 'react';
import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';

const badgeColors = {
	primary: {
		outline: 'border-primary dark:border-primary-dark text-primary dark:text-primary-dark',
		solid: 'bg-primary dark:bg-primary-dark',
		transparent:
			'border-primary dark:border-primary-dark text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/10',
		glow: 'border-neutral-900 ring-2 ring-neutral-100 text-neutral-500',
	},
	accent: {
		outline: 'border-accent dark:border-accent-dark text-accent dark:text-accent-dark',
		solid: 'bg-accent dark:bg-accent-dark',
		transparent:
			'border-accent dark:border-accent-dark text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10',
		glow: 'border-purple-900 ring-1 ring-purple-100 text-purple-500',
	},
	secondary: {
		outline: 'border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark',
		solid: 'bg-secondary dark:bg-secondary-dark',
		transparent:
			'border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark bg-secondary/10 dark:bg-secondary-dark/10',
		glow: 'border-neutral-900 ring-1 ring-neutral-100 text-neutral-500',
	},
	danger: {
		outline: 'border-danger dark:border-danger-dark text-danger dark:text-danger-dark',
		solid: 'bg-danger dark:bg-danger-dark',
		transparent:
			'border-danger dark:border-danger-dark text-danger dark:text-danger-dark bg-danger/10 dark:bg-danger-dark/10',
		glow: 'border-rose-900 ring-1 ring-rose-100 text-rose-500',
	},
	warning: {
		outline: 'border-warning dark:border-warning-dark text-warning dark:text-warning-dark',
		solid: 'bg-warning dark:bg-warning-dark',
		transparent:
			'border-warning dark:border-warning-dark text-warning dark:text-warning-dark bg-warning/10 dark:bg-warning-dark/10',
		glow: 'border-yellow-900 ring-1 ring-yellow-100 text-yellow-500',
	},
	success: {
		outline: 'border-success dark:border-success-dark text-success dark:text-success-dark',
		solid: 'bg-success dark:bg-success-dark',
		transparent:
			'border-success dark:border-success-dark text-success dark:text-success-dark bg-success/10 dark:bg-success-dark/10',
		glow: 'border-teal-900 ring-1 ring-teal-100 text-teal-500',
	},
	info: {
		outline: 'border-info dark:border-info-dark text-info dark:text-info-dark',
		solid: 'bg-info dark:bg-info-dark',
		transparent: 'border-info dark:border-info-dark text-info dark:text-info-dark bg-info/10 dark:bg-info-dark/10',
		glow: 'border-cyan-900 ring-1 ring-cyan-100 text-cyan-500',
	},
	link: {
		outline: 'border-link dark:border-link-dark text-link dark:text-link-dark',
		solid: 'bg-link dark:bg-link-dark',
		transparent: 'border-link dark:border-link-dark text-link dark:text-link-dark bg-link/10 dark:bg-link-dark/10',
		glow: 'border-blue-900 ring-1 ring-blue-100 text-blue-500',
	},
	neutral: {
		outline: 'border-text-primary dark:border-text-primary-dark text-test-primary dark:text-text-primary-dark',
		solid: 'bg-hint dark:bg-hint-dark text-text-primary dark:text-text-primary-dark',
		transparent:
			'border-text-primary dark:border-hint-dark text-text-primary dark:text-text-primary-dark bg-hint dark:bg-hint-dark',
		glow: 'border-neutral-900 ring-1 ring-neutral-100 text-neutral-500',
	},
};

export interface BadgeProps extends React.ComponentPropsWithRef<'div'> {
	color?: keyof typeof badgeColors;
	variant?: keyof (typeof badgeColors)[keyof typeof badgeColors];
	rounded?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	({ children, color = 'primary', variant = 'solid', rounded, className, ...rest }, ref) => {
		const colors = Object.entries(badgeColors).reduce(
			(obj, [key, value]) => {
				obj[key] = value[variant];
				return obj;
			},
			{} as Record<string, string>
		);

		const badgeVariants = cva('inline-flex text-xs py-1.5 font-medium leading-none items-center gap-1 px-2', {
			variants: {
				color: colors,
			},
			defaultVariants: {
				color: 'primary',
			},
		});

		const badgeStyles = cn(
			badgeVariants({ color }),
			{
				'rounded-full': rounded,
				'rounded': !rounded,
				'border': variant !== 'solid',
				'bg-transparent': variant === 'outline',
				'text-white': variant === 'solid' && color !== 'neutral',
			},
			className
		);

		return (
			<div ref={ref} {...rest} className={badgeStyles}>
				{children}
			</div>
		);
	}
);

Badge.displayName = 'Badge';
