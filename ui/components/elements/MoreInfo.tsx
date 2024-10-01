import { TooltipContent, Tooltip } from './Tooltip';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export type MoreInfoProps = {
	children: React.ReactNode;
	delay?: number;
	className?: string;
	tooltipWidth?: string;
};

export const MoreInfo = ({ children, className, delay = 0, tooltipWidth }: MoreInfoProps) => {
	return (
		<Tooltip className={className} delay={delay}>
			<QuestionMarkCircleIcon className="h-4 text-link cursor-pointer transition dark:text-link-dark" />
			<TooltipContent className={`${tooltipWidth ? tooltipWidth : ''}`}>{children}</TooltipContent>
		</Tooltip>
	);
};
