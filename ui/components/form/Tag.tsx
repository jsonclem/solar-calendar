import { XMarkIcon } from '@heroicons/react/20/solid';

interface TagProps extends React.ComponentPropsWithRef<'div'> {
	removeTag: (index: number) => void;
	index: number;
}

export const Tag: React.FC<TagProps> = ({ children, removeTag, index }) => {
	return (
		<div className="text-white whitespace-nowrap gap-2 animate-fade-in flex rounded text-xs font-medium p-2 items-center h-[26px] bg-primary dark:bg-primary-dark transition">
			<div className="overflow-hidden text-ellipsis">{children}</div>
			<div>
				<XMarkIcon onClick={() => removeTag(index)} className="h-3 cursor-pointer" />
			</div>
		</div>
	);
};
