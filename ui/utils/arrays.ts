function sortFn(value: string, sortKey?: string, fallbackKey?: string) {
	return (a: any, b: any) => {
		if (a[sortKey || 'id'] === value) {
			return -1;
		} else if (b[sortKey || 'id'] === value) {
			return 1;
		}

		return a[fallbackKey || 'name']?.localeCompare(b[fallbackKey || 'name']);
	};
}

export function sortSelected(array: any[] = [], value: string, sortKey?: string, fallbackKey?: string) {
	if (!Array.isArray(array)) array = [];
	return array?.sort(sortFn(value, sortKey, fallbackKey));
}
