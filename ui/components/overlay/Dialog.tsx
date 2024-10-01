'use client';

import { cn } from '@/ui/utils/styles';
import React, { useEffect } from 'react';

export const Dialog = React.forwardRef<HTMLDialogElement, React.ComponentPropsWithRef<'dialog'>>(
	({ className, children, ...rest }, ref) => {
		useEffect(() => {
			const dialog = typeof ref !== 'function' ? ref?.current : null;
			if (dialog) {
				dialog.addEventListener('click', e => {
					const rect = dialog.getBoundingClientRect();
					if (e.clientX > rect.right || e.clientY > rect.bottom || e.clientX < rect.left || e.clientY < rect.top) {
						dialog.close();
					}
				});
			}
		}, [ref]);

		return (
			<dialog
				ref={ref}
				className={cn(
					'rounded-lg max-w-xl animate-fade-in shadow-lg w-full text-primary dark:text-primary-dark bg-background dark:bg-background-dark transition',
					className
				)}
				{...rest}
			>
				{children}
			</dialog>
		);
	}
);

Dialog.displayName = 'Dialog';

export const DialogContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div ref={ref} className={cn('relative', className)} {...rest}>
				{children}
			</div>
		);
	}
);

DialogContent.displayName = 'DialogContent';

export const DialogHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				className={cn('flex items-center px-3 py-2 border-b border-separator dark:border-separator-dark', className)}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					'flex items-center px-3 py-2 bg-hint dark:bg-hint-dark border-t border-separator dark:border-separator-dark',
					className
				)}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

DialogFooter.displayName = 'DialogFooter';

export type UseDialogType = {
	dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
	showModal: () => void;
	close: () => void;
	open: boolean | undefined;
};

export const useDialog = (): UseDialogType => {
	const dialogRef = React.useRef<HTMLDialogElement>(null);

	return {
		dialogRef,
		showModal: () => dialogRef.current?.showModal(),
		close: () => dialogRef.current?.close(),
		open: dialogRef.current?.open,
	};
};
