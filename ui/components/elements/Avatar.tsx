import Image from 'next/image';
import React from 'react';
import { Identicon, IdenticonProps } from './Identicon';
import { cn } from '@/ui/utils/styles';

export const Avatar = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ className, children, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					'w-12 h-12 flex items-center justify-center p-0.5 relative rounded-full overflow-hidden shadow border border-neutral-700 dark:border-primary-dark transition',
					className
				)}
			>
				{children}
			</div>
		);
	}
);

Avatar.displayName = 'Avatar';

export type AvatarImageProps = {
	alt?: string;
	className?: string;
	height?: number;
	src: string;
	width?: number;
};

export const AvatarImage: React.FC<AvatarImageProps> = ({ alt, className, height, src, width }) => {
	return (
		<img
			src={src}
			width={width}
			height={height}
			className={cn('w-full h-full', className)}
			alt={alt || 'avatar'}
		/>
	);
};

export function getInitials(str: string) {
	if (!str) return '';
	const words = str.split(' ');

	if (words.length === 1) {
		return words[0].slice(0, 2);
	} else {
		return words[0][0] + words[1][0];
	}
}

export interface AvatarInitialsProps extends React.ComponentPropsWithoutRef<'div'> {
	name: string;
}

export const AvatarInitials: React.FC<AvatarInitialsProps> = ({ name, className, ...rest }) => {
	return (
		<div {...rest} className={cn('font-bold uppercase flex items-center justify-center text-lg w-full h-full', className)}>
			{getInitials(name)}
		</div>
	);
};

export const AvatarIdenticon: React.FC<IdenticonProps> = ({ size, className, hash, ...rest }) => (
	<div {...rest} className={cn('w-full h-full flex items-center justify-center', className)}>
		<Identicon hash={hash} size={size} />
	</div>
);
