'use client';

import Link from 'next/link';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '../elements/Button';
import { cn } from '@/ui/utils/styles';
import { useParams } from 'next/navigation';

export type ContentNavigationContextType = {
	activeSection?: string | null;
};

const ContentNavigationContext = createContext<ContentNavigationContextType>({
	activeSection: null,
});

export const useContentNavigation = () => useContext(ContentNavigationContext);

export interface ContentNavigationProps extends React.ComponentPropsWithRef<'ul'> {
	scrollTo?: number;
	offset?: number;
}

export const ContentNavigation = React.forwardRef<HTMLUListElement, ContentNavigationProps>(
	({ children, className, scrollTo, offset, ...rest }, ref) => {
		const params = useParams();

		const [activeSection, setActiveSection] = useState<string | null>(null);

		const sections = React.useMemo(() => {
			const sectionsArray: string[] = [];

			if (children) {
				React.Children.forEach(children, child => {
					if (React.isValidElement(child)) {
						sectionsArray.push(child.props.href);
					}
				});
			}

			return sectionsArray;
		}, [children]);

		useEffect(() => {
			if (window.location.hash) {
				const element = document.querySelector(window.location.hash);
				if (element) {
					const yOffset = scrollTo || 56;
					const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			} else {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}, [params, scrollTo]);

		useEffect(() => {
			const handleScroll = () => {
				let currentSection = activeSection;
				sections.forEach(section => {
					const elem = document.querySelector(section);
					const rect = elem?.getBoundingClientRect();
					if (rect && rect.top >= 0 && rect.top <= (offset || window.innerHeight * 0.5)) {
						currentSection = section;
					}
				});
				setActiveSection(currentSection);
			};

			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}, [sections, activeSection, offset]);

		const value = { activeSection };

		return (
			<ContentNavigationContext.Provider value={value}>
				<ul ref={ref} {...rest} className={cn('relative leading-none space-y-2 mb-2', className)}>
					{children}
				</ul>
			</ContentNavigationContext.Provider>
		);
	}
);

ContentNavigation.displayName = 'ContentNavigation';

export interface ContentNavLinkProps extends React.ComponentPropsWithRef<'li'> {
	href: string;
	show?: boolean;
}

export const ContentNavLink = React.forwardRef<HTMLLIElement, ContentNavLinkProps>(
	({ children, href, className, show = true, ...rest }, ref) => {
		const { activeSection } = useContentNavigation();

		if (!show) {
			return null;
		}

		const isActive = activeSection === href;

		return (
			<li ref={ref} {...rest} className={cn('leading-none mb-1', className)}>
				<Link
					href={href}
					className={cn('text-xs text-text-secondary transition', {
						'text-text-primary font-medium': isActive,
					})}
				>
					{children}
				</Link>
			</li>
		);
	}
);

ContentNavLink.displayName = 'ContentNavLink';

export const ScrollToTop = ({ className }: { className?: string }) => {
	return (
		<Button
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			variant="link"
			color="link"
			className={cn('text-xs mt-2', className)}
		>
			Scroll to top <ArrowUpCircleIcon className="ml-1 h-4 w-4" />
		</Button>
	);
};
