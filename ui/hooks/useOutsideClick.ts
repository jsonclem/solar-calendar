import { useEffect, RefObject } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void): void => {
	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent): void => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleOutsideClick, false);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick, false);
		};
	}, [ref, callback]);
};
