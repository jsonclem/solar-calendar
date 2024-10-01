// TODO: Add floating hook

import { useRef, useState } from 'react';

export const useFloating = () => {
	const [open, setOpen] = useState(false);

	const triggerRef = useRef<HTMLElement>(null);
	const floatRef = useRef<HTMLElement>(null);

	//   const style = {
	//     bottom: window.innerHeight - rect.top,
	//     left: rect.left + rect.width / 2,
	// };

	return {};
};
