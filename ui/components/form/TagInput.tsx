'use client';

import React, { useId, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { cn } from '@/ui/utils/styles';
import { Tag } from './Tag';

export interface TagInputProps extends React.ComponentPropsWithRef<'div'> {
	tags: string[];
	onValueChange: (tags: string[]) => void;
	placeholder?: string;
}

export const TagInput = React.forwardRef<HTMLDivElement, TagInputProps>(
	({ children, className, placeholder, onValueChange, tags = [], ...rest }, ref) => {
		const inputId = useId();
		const [inputValue, setInputValue] = useState('');
		const [focused, setFocused] = useState(false);

		function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
			if (e.key === 'Enter' && inputValue) {
				onValueChange([...tags, inputValue]);
				setInputValue('');
			}

			if ((e.key === 'Delete' || e.key === 'Backspace') && !inputValue) {
				const arr = [...tags];
				arr.pop();
				onValueChange(arr);
			}
		}

		function removeTag(index: number) {
			const arr = tags.filter((_, i) => i !== index);
			onValueChange(arr);
		}

		return (
			<div
				ref={ref}
				className={cn(
					'border flex flex-wrap gap-1 p-1 rounded-md min-h-9 transition-all',
					{
						'border-primary dark:border-primary-dark': focused,
						'border-input': !focused,
					},
					className
				)}
				{...rest}
			>
				{tags.map((tag, index) => (
					<Tag key={`${inputId}_${index}`} index={index} removeTag={removeTag}>
						{tag}
					</Tag>
				))}
				<div className="grow">
					<input
						onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						onKeyDown={handleKeyDown}
						type="text"
						placeholder={placeholder || 'Enter tag...'}
						className="w-full text-xs h-[26px] pl-1 outline-none focus:outline-none bg-transparent grow"
					/>
				</div>
			</div>
		);
	}
);

TagInput.displayName = 'TagInput';
