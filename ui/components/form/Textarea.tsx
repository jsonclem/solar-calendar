import React from 'react';
import { cn } from '@/ui/utils/styles';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentPropsWithRef<'textarea'>>(
	({ className, ...rest }, ref) => {
		return (
			<textarea
				ref={ref}
				{...rest}
				className={cn(
					'relative transition outline-none min-h-16 p-3 flex focus:border-primary dark:focus:border-primary-dark w-full dark:bg-slate-700 border-input dark:border-input-dark rounded-md border',
					className
				)}
			/>
		);
	}
);

Textarea.displayName = 'Textarea';
