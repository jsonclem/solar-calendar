import { useEffect } from 'react';

export const useDialogCloseEffect = (ref: React.RefObject<HTMLDialogElement> | undefined) => {
	useEffect(() => {
		const dialog = typeof ref !== 'function' ? ref?.current : null;
		if (dialog) {
			dialog.addEventListener('click', e => {
				const rect = dialog.getBoundingClientRect();
				if (e.clientX > rect.right || e.clientY > rect.bottom || e.clientX < rect.left || e.clientY < rect.top) {
					dialog.close();
				}
			});
		}
	}, [ref]);
};
