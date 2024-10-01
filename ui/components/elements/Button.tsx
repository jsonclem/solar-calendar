import React from 'react';
import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';

const buttonColors = {
	primary: {
		outline: 'border border-primary dark:border-primary-dark text-primary dark:text-primary-dark',
		solid: 'bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark',
		ghost: 'bg-transparent text-primary dark:text-primary-dark hover:bg-primary/10 hover:dark:bg-primary-dark/10',
		link: 'text-primary dark:text-primary-dark',
	},
	secondary: {
		outline: 'border border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark',
		solid: 'bg-secondary dark:bg-secondary-dark',
		ghost: 'bg-transparent text-primary dark:text-secondary-dark hover:bg-secondary/10 hover:dark:bg-secondary-dark/10',
		link: 'text-secondary dark:text-secondary-dark',
	},
	danger: {
		outline: 'border border-danger dark:border-danger-dark text-danger dark:text-danger-dark',
		solid: 'bg-danger dark:bg-danger-dark',
		ghost: 'bg-transparent text-danger dark:text-danger-dark hover:bg-danger/10 hover:dark:bg-danger-dark/10 ',
		link: 'text-danger dark:text-danger-dark',
	},
	warning: {
		outline: 'border border-warning dark:border-warning-dark text-warning dark:text-warning-dark',
		solid: 'bg-warning dark:bg-warning-dark',
		ghost: 'bg-transparent text-warning dark:text-warning-dark hover:bg-warning/10 hover:dark:bg-warning-dark/10',
		link: 'text-warning dark:text-warning-dark',
	},
	success: {
		outline: 'border border-success dark:border-success-dark text-success dark:text-success-dark',
		solid: 'bg-success dark:bg-success-dark',
		ghost: 'bg-transparent text-success dark:text-success-dark hover:bg-success/10 hover:dark:bg-success-dark/10',
		link: 'text-success dark:text-success-dark',
	},
	info: {
		outline: 'border border-info dark:border-info-dark text-info dark:text-info-dark',
		solid: 'bg-info dark:bg-info-dark',
		ghost: 'bg-transparent text-info dark:text-info-dark hover:bg-info/10 hover:dark:bg-info-dark/10',
		link: 'text-info dark:text-info-dark',
	},
	link: {
		outline: 'border border-link dark:border-link-dark text-link dark:text-link-dark',
		solid: 'bg-link dark:bg-link-dark',
		ghost: 'bg-transparent text-link dark:text-link-dark hover:bg-link/10 hover:dark:bg-link-dark/10',
		link: 'text-link dark:text-link-dark',
	},
	neutral: {
		outline: 'border border-text-primary dark:border-text-primary-dark text-text-primary dark:text-primary-dark',
		solid: 'bg-hint dark:bg-hint-dark text-text-primary dark:text-text-primary-dark',
		ghost: 'bg-transparent text-text-primary dark:text-text-primary-dark hover:bg-hint hover:dark:bg-hint-dark',
		link: 'text-text-primary dark:text-primary-dark',
	},
	accent: {
		outline: 'border border-accent dark:border-accent-dark text-accent dark:text-accent-dark',
		solid: 'bg-accent dark:bg-accent-dark text-accent dark:text-accent-dark',
		ghost: 'bg-transparent text-accent dark:text-accent-dark hover:bg-accent/10 hover:dark:bg-accent-dark/10',
		link: 'text-accent dark:text-accent-dark',
	},
};

export const buttonSizes = {
	xs: 'h-7 px-3 text-xs',
	sm: 'h-8 px-3 text-xs',
	md: 'h-9 px-4',
	lg: 'h-10 px-8',
	square: 'h-9 w-9 justify-center',
	sqsm: 'h-8 w-8 justify-center',
	sqxs: 'h-7 w-7 justify-center',
};

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
	children: React.ReactNode;
	size?: keyof typeof buttonSizes;
	color?: keyof typeof buttonColors;
	variant?: keyof (typeof buttonColors)[keyof typeof buttonColors];
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, size = 'md', color = 'primary', variant = 'solid', className, ...rest } = props;

	const colors = Object.entries(buttonColors).reduce((obj, [key, value]) => {
		obj[key] = value[variant];
		return obj;
	}, {} as Record<string, string>);

	const buttonVariants = cva(
		'rounded-md outline-none inline-flex focus:outline-none items-center cursor-pointer relative transition-all',
		{
			variants: {
				color: colors,
				size: buttonSizes,
			},
			defaultVariants: {
				color: 'primary',
				size: 'md',
			},
		}
	);

	const buttonStyles = cn(buttonVariants({ size, color }), className, {
		'opacity-50 cursor-not-allowed pointer-events-none': props.disabled,
		'focus-visible:ring-focus dark:focus-visible:ring-focus-dark focus-visible:ring font-medium': variant !== 'link',
		'hover:opacity-80': ['solid', 'outline'].includes(variant),
		'shadow': variant === 'solid',
		'hover:underline focus:underline': variant === 'link',
		'text-white dark:text-white': variant === 'solid' && color !== 'neutral',
		'px-0 h-auto': variant === 'link',
	});

	return (
		<button ref={ref} className={buttonStyles} role="button" {...rest}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
