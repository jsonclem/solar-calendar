import React from 'react';
import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';

const inputHeights = {
	xs: 'h-7',
	sm: 'h-8',
	md: 'h-9',
	lg: 'h-10',
};

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
	height?: keyof typeof inputHeights;
	invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ height = 'md', type, className, ...rest }, ref) => {
	const inputVariants = cva(
		'border border-input outline-none rounded-md w-full px-3 transition-all focus:border-primary focus:outline-none dark:focus:border-primary-dark',
		{
			variants: {
				height: inputHeights,
			},
			defaultVariants: {
				height: 'md',
			},
		}
	);

	const inputStyles = cn(
		inputVariants({ height }),
		{
			'border-danger dark:border-danger-dark': rest.invalid,
		},
		className
	);

	return <input type={type} ref={ref} {...rest} className={inputStyles} />;
});

Input.displayName = 'Input';

export const InputWrapper: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className, ...rest }) => (
	<div {...rest} className={cn('relative', className)}>
		{children}
	</div>
);

export const InputPrefix: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className, ...rest }) => (
	<div {...rest} className={cn('absolute inset-y-0 left-0 flex items-center pl-3', className)}>
		{children}
	</div>
);

export const InputSuffix: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className, ...rest }) => (
	<div {...rest} className={cn('absolute inset-y-0 right-0 flex items-center pr-3', className)}>
		{children}
	</div>
);
