'use client';

import { CSS } from '@dnd-kit/utilities';
import { closestCenter, DndContext } from '@dnd-kit/core';
import { cn } from '@/ui/utils/styles';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';

export type SortableItemProps = {
	id: string;
	children: React.ReactNode | ((props: any) => React.ReactElement);
	className?: string;
};

export const SortableItem: React.FC<SortableItemProps> = ({ id, children, className }) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	const isFuncChild = typeof children === 'function';
	const childProps = isFuncChild ? {} : { ...attributes, ...listeners };
	const child = isFuncChild ? children({ attributes, listeners }) : children;

	return (
		<div ref={setNodeRef} style={style} {...childProps} className={cn('', className)}>
			{child}
		</div>
	);
};

export interface SortableListProps extends React.ComponentPropsWithoutRef<'div'> {
	children: React.ReactNode;
	list: any[];
	setList: (list: any) => void;
}

export const SortableList: React.FC<SortableListProps> = ({ children, list, setList, ...rest }) => {
	const onDragEnd = (event: any) => {
		const { active, over } = event;
		if (active.id === over.id) return;

		const oldIndex = list.findIndex((item: any) => item.id === active.id);
		const newIndex = list.findIndex((item: any) => item.id === over.id);
		const newArr = structuredClone(arrayMove(list, oldIndex, newIndex));

		setList(newArr);
	};

	return (
		<DndContext modifiers={[restrictToVerticalAxis]} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
			<SortableContext items={list} strategy={verticalListSortingStrategy}>
				<div {...rest}> {children}</div>
			</SortableContext>
		</DndContext>
	);
};
