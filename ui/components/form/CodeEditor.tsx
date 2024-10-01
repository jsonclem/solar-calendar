'use client';

import Editor, { useMonaco } from '@monaco-editor/react';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { cn } from '@/ui/utils/styles';
import { darkTheme } from '@/ui/utils/code';

export type CodeEditorContextType = {
	language: string;
	value: string;
	onValueChange: (code: string) => void;
	expand: boolean;
	setExpand: (expand: boolean) => void;
	parentHeight: number;
};

const CodeEditorContext = createContext<CodeEditorContextType>({
	language: '',
	value: '',
	onValueChange: () => {},
	expand: false,
	setExpand: () => {},
	parentHeight: 0,
});

export const useCodeEditor = () => useContext(CodeEditorContext);

export interface CodeEditorProps extends React.ComponentPropsWithRef<'div'> {
	language?: string;
	value: string;
	onValueChange: (code: string) => void;
	expanded?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
	children,
	className,
	value,
	onValueChange,
	expanded,
	language = 'javascript',
	...rest
}) => {
	const [expand, setExpand] = useState(expanded || false);
	const ref = useRef<HTMLDivElement>(null);
	const [parentHeight, setParentHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setParentHeight(ref.current.clientHeight);
		}
	}, []);

	const val = {
		language,
		value,
		onValueChange,
		expand,
		parentHeight,
		setExpand,
	};

	return (
		<CodeEditorContext.Provider value={val}>
			<div
				ref={ref}
				className={cn(
					'rounded-md dark relative overflow-auto bg-separator-dark shadow-lg',
					{
						'max-h-80': !expand,
					},
					className
				)}
				{...rest}
			>
				{children}
			</div>
		</CodeEditorContext.Provider>
	);
};

CodeEditor.displayName = 'CodeBlock';

export interface CodeContentProps extends React.ComponentPropsWithoutRef<'div'> {
	height?: string;
	full?: boolean;
	readOnly?: boolean;
}

export const CodeEditorContent: React.FC<CodeContentProps> = ({ className, full, height, readOnly, ...rest }) => {
	const { onValueChange, value, language, parentHeight } = useCodeEditor();

	const monaco = useMonaco();

	useEffect(() => {
		if (monaco) {
			monaco.editor.defineTheme('xgenDark', darkTheme);
			monaco.editor.setTheme('xgenDark');

			//NOTE: Monaco needs setModelLanguage this function to execute to be called at the end of the call stack. The timeout ensures that.
			const timer = setTimeout(() => {
				monaco.editor.setModelLanguage(monaco.editor.getModels()[0], language);
			}, 100);

			return () => clearTimeout(timer);
		}
	}, [monaco, language]);

	return (
		<div className={cn('relative text-xs', className)} {...rest}>
			<Editor
				height={full && parentHeight ? `${parentHeight - 44}px` : height || '600px'}
				defaultLanguage={language || 'javascript'}
				theme="xgenDark"
				onChange={val => onValueChange(val || '')}
				value={value}
				options={{
					tabSize: 4,
					padding: { top: 10, bottom: 10 },
					minimap: {
						enabled: false,
					},
					formatOnPaste: true,
					lineNumbersMinChars: 3,
					fontSize: 13,
					overviewRulerLanes: 0,
					hideCursorInOverviewRuler: true,
					scrollbar: {
						vertical: 'hidden',
					},
					overviewRulerBorder: false,
					readOnly: readOnly || false,
				}}
			/>
		</div>
	);
};

CodeEditorContent.displayName = 'CodeContent';

export const CopyCodeEditorButton: React.FC<{ className?: string }> = ({ className }) => {
	const { value } = useCodeEditor();
	const [copied, setCopied] = useState(false);

	function copyCode() {
		navigator.clipboard.writeText(value);
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

export const CodeEditorHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
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

CodeEditorHeader.displayName = 'CodeBlockHeader';

export const CodeEditorExpand = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(() => {
	const { expand, setExpand } = useCodeEditor();

	return (
		<button
			onClick={() => setExpand(!expand)}
			className="bg-white left-1/2 -translate-x-1/2 outline-none focus:outline-none focus-visible:ring focus-visible:ring-focus-dark sticky bottom-3 text-text-primary font-medium h-6 text-xs px-2 shadow rounded transition hover:bg-hint"
		>
			{expand ? 'Collapse' : 'Expand'}
		</button>
	);
});

CodeEditorExpand.displayName = 'CodeBlockExpand';

export const useCodeContentHeight = () => {
	const ref = React.useRef<HTMLElement>(null);

	return {
		ref,
		height: ref.current?.clientHeight,
	};
};
