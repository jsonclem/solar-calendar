import { useState, Dispatch, SetStateAction, CSSProperties } from 'react';
import { useClick, useDismiss, useFloating, useInteractions, ReferenceType } from '@floating-ui/react';

export type UsePopoverType = {
	dropStyles: CSSProperties;
	getReferenceProps: (userProps?: object) => object;
	getFloatingProps: (userProps?: object) => object;
	triggerRef: (node: ReferenceType | null) => void;
	dropRef: (node: HTMLElement | null) => void;
	triggerProps: object;
	dropProps: object;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	toggleDropdown: () => void;
};

export const usePopover = (): UsePopoverType => {
	const [open, setOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open,
		onOpenChange: setOpen,
		strategy: 'fixed',
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

	return {
		dropStyles: floatingStyles,
		getReferenceProps,
		getFloatingProps,
		triggerRef: refs.setReference,
		dropRef: refs.setFloating,
		triggerProps: getReferenceProps(),
		dropProps: getFloatingProps(),
		open,
		setOpen,
		toggleDropdown: () => setOpen(prev => !prev),
	};
};
