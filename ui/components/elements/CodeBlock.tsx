'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cn } from '@/ui/utils/styles';

export type StyleRuleType = {
	[key: string]: string;
};

export type CodeStyleType = {
	[key: string]: StyleRuleType;
};

const style: CodeStyleType = {
	'pre[class*="language-"]': {
		display: 'block',
		overflowX: 'auto',
		padding: '0.75em',
		color: '#d4d4d4',
		background: '#262626',
	},
	'code[class*="language-"]': {
		display: 'block',
		overflowX: 'auto',
		padding: '0.75em',
		color: '#d4d4d4',
		background: '#262626',
	},
	'comment': {
		color: '#737373',
		fontStyle: 'italic',
	},
	'quote': {
		color: '#fff',
		fontStyle: 'italic',
	},
	'keyword': {
		color: '#a78bfa',
		fontWeight: 'bold',
	},
	'selector-tag': {
		color: '#d4d4d4',
		fontWeight: 'bold',
	},
	'subst': {
		color: '#d4d4d4',
		fontWeight: 'normal',
	},
	'number': {
		color: '#fff',
	},
	'literal': {
		color: '#fff',
	},
	'string': {
		color: '#fff',
	},
	'function': {
		color: '#38bdf8',
	},
};

export type CodeBlockContextType = {
	language: string;
	code: string;
	setCode: (code: string) => void;
	expand: boolean;
	setExpand: (expand: boolean) => void;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
	language: '',
	code: '',
	setCode: () => {},
	expand: false,
	setExpand: () => {},
});

export const useCodeBlock = () => useContext(CodeBlockContext);

export interface CodeBlockProps extends React.ComponentPropsWithRef<'div'> {
	language?: string;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
	({ children, className, language = 'javascript', ...rest }, ref) => {
		const [code, setCode] = useState('');
		const [expand, setExpand] = useState(false);

		const value = {
			language,
			code,
			setCode,
			expand,
			setExpand,
		};

		return (
			<CodeBlockContext.Provider value={value}>
				<div
					ref={ref}
					{...rest}
					className={cn(
						'rounded-md dark relative overflow-auto bg-separator-dark shadow-lg',
						{
							'max-h-80': !expand,
						},
						className
					)}
				>
					{children}
				</div>
			</CodeBlockContext.Provider>
		);
	}
);

CodeBlock.displayName = 'CodeBlock';

export interface CodeContentProps extends React.ComponentPropsWithRef<'div'> {
	children: string;
}

export const CodeContent = React.forwardRef<HTMLDivElement, CodeContentProps>(({ children, className, ...rest }, ref) => {
	const { setCode } = useCodeBlock();

	useEffect(() => {
		setCode(children);
	}, [children, setCode]);

	return (
		<div ref={ref} className={cn('relative text-xs', className)} {...rest}>
			<SyntaxHighlighter
				lineProps={{
					style: {
						wordBreak: 'break-all',
						whiteSpace: 'pre-wrap',
					},
				}}
				wrapLines={true}
				language="javascript"
				style={style as CodeStyleType}
			>
				{children}
			</SyntaxHighlighter>
		</div>
	);
});

CodeContent.displayName = 'CodeContent';

export const CopyCodeButton: React.FC<{ className?: string }> = ({ className }) => {
	const { code } = useCodeBlock();
	const [copied, setCopied] = useState(false);

	function copyCode() {
		navigator.clipboard.writeText(code);
		setCopied(true);
	}

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			copyCode();
		}
	};

	useEffect(() => {
		if (copied) {
			const timeout = setTimeout(() => {
				setCopied(false);
			}, 1000);

			return () => clearTimeout(timeout);
		}
	}, [copied]);

	return (
		<button
			onClick={copyCode}
			onKeyDown={handleKeyDown}
			aria-label="Copy code"
			className={cn(
				'outline-none focus:outline-none h-7 w-7 flex items-center justify-center cursor-pointer transition hover:bg-input-dark rounded focus-visible:ring-focus-dark focus-visible:ring',
				className
			)}
		>
			{copied ? (
				<CheckIcon className="h-4 text-success-dark dark:text-success-dark" />
			) : (
				<DocumentDuplicateIcon className="h-4" />
			)}
		</button>
	);
};

export const CodeBlockHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					'flex items-center z-10 gap-1 h-11 px-4 bg-background-dark text-white sticky top-0 left-0',
					className
				)}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

CodeBlockHeader.displayName = 'CodeBlockHeader';

export const CodeBlockExpand = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(() => {
	const { expand, setExpand } = useCodeBlock();

	return (
		<button
			onClick={() => setExpand(!expand)}
			className="bg-white left-1/2 -translate-x-1/2 outline-none focus:outline-none focus-visible:ring focus-visible:ring-focus-dark sticky bottom-3 text-text-primary font-medium h-6 text-xs px-2 shadow rounded transition hover:bg-hint"
		>
			{expand ? 'Collapse' : 'Expand'}
		</button>
	);
});

CodeBlockExpand.displayName = 'CodeBlockExpand';
