import React from 'react';
import { Calendar } from '../elements/Calendar';
import { CalendarIcon } from '@heroicons/react/16/solid';
import { cn } from '@/ui/utils/styles';
import { cva } from 'class-variance-authority';
import { dateFormats, formatDate } from '@/ui/utils/dates';
import { usePopover } from '@/ui/hooks/usePopover';

const buttonSizes = {
	xs: 'h-7',
	sm: 'h-8',
	md: 'h-9',
	lg: 'h-10',
};

export interface DatePickerProps extends React.ComponentPropsWithoutRef<'button'> {
	children?: React.ReactNode;
	date?: Date;
	dateFormat?: string;
	name?: string;
	onValueChange: (date?: Date) => void;
	placeholder?: string;
	size?: keyof typeof buttonSizes;
}

export const DatePicker: React.FC<DatePickerProps> = ({
	children,
	className,
	date,
	dateFormat,
	name,
	onValueChange,
	placeholder,
	size = 'md',
	...rest
}) => {
	const { dropProps, open, triggerRef, dropRef, triggerProps, dropStyles } = usePopover();

	const buttonVariants = cva(
		'rounded-md outline-none flex focus-visible:border-primary dark:focus-visible:border-primary-dark w-full focus:outline-none border text-text-primary dark:text-text-primary-dark border-input dark:border-input-dark px-3 items-center cursor-pointer relative transition-all',
		{
			variants: {
				size: buttonSizes,
			},
			defaultVariants: {
				size: 'md',
			},
		}
	);

	return (
		<>
			<input
				type="date"
				value={formatDate(date || '', dateFormats.iso)}
				name={name}
				className="hidden"
				onChange={() => {}}
			/>
			<button ref={triggerRef} className={cn(buttonVariants({ size }), className)} {...rest} {...triggerProps}>
				<CalendarIcon className="h-4 mr-1.5" />
				<span className="whitespace-nowrap">
					{children || formatDate(date || '', dateFormat || dateFormats.full, true) || placeholder}
				</span>
			</button>

			{open && (
				<div
					ref={dropRef}
					style={dropStyles}
					className="border border-input z-50 shadow mt-1 rounded-md bg-background"
					{...dropProps}
				>
					<Calendar mode="single" onSelect={val => onValueChange(val)} selected={date}  />
				</div>
			)}
		</>
	);
};

DatePicker.displayName = 'DatePicker';
