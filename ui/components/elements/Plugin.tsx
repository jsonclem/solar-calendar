import React from 'react';
import { MoreInfo } from './MoreInfo';
import { Switch } from '../form/Switch';
import { cn } from '@/ui/utils/styles';

export interface PluginProps extends React.ComponentPropsWithRef<'div'> {
	id: string;
	variant?: 'plugin' | 'section';
}

export const Plugin = React.forwardRef<HTMLDivElement, PluginProps>(({ children, className, variant, id, ...rest }, ref) => {
	return (
		<section
			id={id}
			ref={ref}
			{...rest}
			className={cn(
				'grid grid-cols-[auto_1fr] py-8 transition',
				{
					'bg-neutral-50 p-5 border border-neutral-100 shadow-md rounded-md': variant === 'plugin',
				},
				className
			)}
		>
			{children}
		</section>
	);
});

Plugin.displayName = 'Plugin';

export const PluginMeta = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div ref={ref} {...rest} className={cn('w-52 pr-6 flex flex-col gap-2', className)}>
				{children}
			</div>
		);
	}
);

PluginMeta.displayName = 'PluginMeta';

export const PluginContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div ref={ref} {...rest} className={cn('pl-6', className)}>
				{children}
			</div>
		);
	}
);

PluginContent.displayName = 'PluginContent';

export const PluginIcon: React.FC<React.ComponentPropsWithRef<'div'>> = ({ children, className }) => {
	return (
		<div
			className={cn(
				'bg-primary rounded-[4px] h-8 w-8 shadow ring ring-accent/30 flex text-white items-center justify-center',
				className
			)}
		>
			{children}
		</div>
	);
};

PluginIcon.displayName = 'PluginIcon';

export const PluginTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithRef<'h3'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<h3 ref={ref} {...rest} className={cn('text-base font-semibold', className)}>
				{children}
			</h3>
		);
	}
);

PluginTitle.displayName = 'PluginTitle';

export const PluginDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithRef<'p'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<p
				ref={ref}
				{...rest}
				className={cn('text-text-secondary transition dark:text-text-secondary-dark text-xs', className)}
			>
				{children}
			</p>
		);
	}
);

PluginDescription.displayName = 'PluginDescription';

export interface PluginToggleProps extends React.ComponentPropsWithRef<'div'> {
	checked: boolean;
	onValueChange: (value: boolean) => void;
	description?: React.ReactNode;
}

export const PluginToggle = React.forwardRef<HTMLDivElement, PluginToggleProps>(
	({ children, className, checked, onValueChange, description, ...rest }, ref) => {
		return (
			<div ref={ref} {...rest} className={cn('flex items-center', className)}>
				<Switch checked={checked} onValueChange={onValueChange} className="mr-2" />
				{children}
				<MoreInfo className="ml-1">{description}</MoreInfo>
			</div>
		);
	}
);

PluginToggle.displayName = 'PluginToggle';
