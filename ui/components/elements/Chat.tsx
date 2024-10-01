import { cn } from '@/ui/utils/styles';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { cva } from 'class-variance-authority';
import React from 'react';

export const chatColors = {
	primary: 'bg-primary text-white',
	secondary: 'bg-secondary text-white',
	danger: 'bg-danger text-white',
	warning: 'bg-warning text-white',
	success: 'bg-success text-white',
	info: 'bg-info text-white',
	link: 'bg-link text-white',
	neutral: 'bg-hint text-primary',
	white: 'bg-white text-primary border border-separator',
};

export const Chat = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div className={cn('relative flex flex-col gap-2', className)} ref={ref} {...rest}>
				{children}
			</div>
		);
	}
);

Chat.displayName = 'Chat';

export const Message = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div className={cn('flex gap-2 animate-fade-in', className)} ref={ref} {...rest}>
				{children}
			</div>
		);
	}
);

Message.displayName = 'Message';

export interface ChatAvatarProps extends React.ComponentPropsWithRef<'div'> {
	rounded?: boolean;
	color?: keyof typeof chatColors;
}

export const ChatAvatar = React.forwardRef<HTMLDivElement, ChatAvatarProps>(
	({ children, color, className, rounded, ...rest }, ref) => {
		const chatAvatarVariants = cva('flex items-center justify-center rounded h-9 w-9 shadow', {
			variants: {
				color: chatColors,
			},
			defaultVariants: {
				color: 'primary',
			},
		});

		return (
			<div>
				<div
					className={cn(
						chatAvatarVariants({ color }),
						{
							'rounded-full': rounded,
						},
						className
					)}
					ref={ref}
					{...rest}
				>
					{children}
				</div>
			</div>
		);
	}
);

ChatAvatar.displayName = 'ChatAvatar';

export interface ChatBubbleProps extends React.ComponentPropsWithRef<'div'> {
	color?: keyof typeof chatColors;
}

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(({ children, className, color, ...rest }, ref) => {
	const chatBubbleVariants = cva('rounded-md rounded-bl-none px-3 py-2 shadow', {
		variants: {
			color: chatColors,
		},
		defaultVariants: {
			color: 'primary',
		},
	});

	return (
		<div className={cn(chatBubbleVariants({ color }), className)} ref={ref} {...rest}>
			{children}
		</div>
	);
});

ChatBubble.displayName = 'ChatBubble';

export const Chatting = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(({ className, ...rest }, ref) => {
	return (
		<div className="h-9 flex items-center">
			<div className={cn('h-7 px-2 overflow-hidden flex items-center bg-hint rounded-full', className)} ref={ref} {...rest}>
				<EllipsisHorizontalIcon className="h-10 leading-none animate-pulse" />
			</div>
		</div>
	);
});

Chatting.displayName = 'Chatting';

export const ChatLoading = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(({ className, ...rest }, ref) => {
	return (
		<div className={cn('grid place-items-center gap-2 grid-flow-col h-full', className)} ref={ref} {...rest}>
			{Array(3)
				.fill('')
				.map((_, i) => (
					<div
						style={{ animationDelay: `${i * 0.2}s` }}
						key={i}
						className="h-2 w-2 rounded-full bg-primary/60 animate-pulse"
					></div>
				))}
		</div>
	);
});

ChatLoading.displayName = 'ChatLoading';
