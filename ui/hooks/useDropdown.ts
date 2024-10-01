import { useRef, useState } from 'react';
import { useOutsideClick } from './useOutsideClick';

interface UseDropdownReturn<T extends HTMLElement> {
	dropdown: boolean;
	toggleDropdown: () => void;
	dropRef: React.RefObject<T>;
	setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useDropdown = <T extends HTMLElement = HTMLDivElement>(): UseDropdownReturn<T> => {
	const [dropdown, setDropdown] = useState<boolean>(false);
	const dropRef = useRef<T>(null);

	useOutsideClick(dropRef, () => setDropdown(false));

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	return {
		dropdown,
		toggleDropdown,
		dropRef,
		setDropdown,
	};
};
