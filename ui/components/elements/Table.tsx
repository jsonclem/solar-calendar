import { cn } from '@/ui/utils/styles';
import React from 'react';

export const Table = React.forwardRef<HTMLTableElement, React.ComponentPropsWithRef<'table'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<table ref={ref} {...rest} className={cn('w-full', className)}>
				{children}
			</table>
		);
	}
);

Table.displayName = 'Table';

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.ComponentPropsWithRef<'thead'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<thead
				ref={ref}
				{...rest}
				className={cn(
					'text-text-secondary dark:text-text-secondary-dark transition font-medium border-b border-separator dark:border-separator-dark',
					className
				)}
			>
				{children}
			</thead>
		);
	}
);

TableHeader.displayName = 'TableHeader';

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ComponentPropsWithRef<'th'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<th ref={ref} {...rest} className={cn('text-left px-3 py-2 font-medium text-sm', className)}>
				{children}
			</th>
		);
	}
);

TableHead.displayName = 'TableHead';

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.ComponentPropsWithRef<'tbody'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<tbody
				ref={ref}
				{...rest}
				className={cn('text-text-primary dark:text-text-primary-dark [&_tr:last-child]:border-0', className)}
			>
				{children}
			</tbody>
		);
	}
);

TableBody.displayName = 'TableBody';

export const TableRow = React.forwardRef<HTMLTableRowElement, React.ComponentPropsWithRef<'tr'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<tr ref={ref} {...rest} className={cn('border-b border-separator dark:border-separator-dark', className)}>
				{children}
			</tr>
		);
	}
);

TableRow.displayName = 'TableRow';

export const TableCell = React.forwardRef<HTMLTableCellElement, React.ComponentPropsWithRef<'td'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<td ref={ref} {...rest} className={cn('p-3', className)}>
				{children}
			</td>
		);
	}
);

TableCell.displayName = 'TableCell';
