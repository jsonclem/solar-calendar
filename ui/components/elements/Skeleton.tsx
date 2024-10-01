import { cn } from '@/ui/utils/styles';

export const Skeleton: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => {
	return <div {...rest} className={cn('animate-pulse transition bg-input dark:bg-input-dark', className)} />;
};
