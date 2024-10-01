import { CSS } from '@dnd-kit/utilities';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable';
import { cn } from '@/ui/utils/styles';
import { useSortable } from '@dnd-kit/sortable';

export interface SortableGridProps extends React.ComponentPropsWithoutRef<'div'> {
	children: React.ReactNode;
	list: any[];
	setList: (list: any) => void;
}

export const SortableGrid: React.FC<SortableGridProps> = ({ children, list, setList, className, ...rest }) => {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

  const onDragEnd = (event: any) => {
		const { active, over } = event;
		if (active.id === over.id) return;

		const oldIndex = list.findIndex((item: any) => item.id === active.id);
		const newIndex = list.findIndex((item: any) => item.id === over.id);
		const newArr = structuredClone(arrayMove(list, oldIndex, newIndex));

		setList(newArr);
	};

	return (
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
			<div className={cn('grid grid-cols-4 gap-2', className)}>
				<SortableContext items={list} strategy={rectSortingStrategy}>
					{children}
				</SortableContext>
			</div>
		</DndContext>
	);
};

export type SortableGridItemProps = {
	id: string;
	children: React.ReactNode | ((props: any) => React.ReactElement);
	className?: string;
};

export const SortableGridItem: React.FC<SortableGridItemProps> = ({ id, children, className }) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	const isFuncChild = typeof children === 'function';
	const childProps = isFuncChild ? {} : { ...attributes, ...listeners };
	const child = isFuncChild ? children({ attributes, listeners }) : children;

	return (
		<div ref={setNodeRef} style={style} {...childProps} className={className}>
			{child}
		</div>
	);
};
