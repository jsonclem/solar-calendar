import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';

export const useFuzzySearch = (data: any[], options: any) => {
	const [results, setResults] = useState<any[]>([]);
	const [search, setSearch] = useState<string>('');

	const fuse = new Fuse(data, options);

	useEffect(() => {
		if (!search) {
			setResults(data);
			return;
		}

		const results = fuse.search(search)?.map(result => ({ ...structuredClone(result.item), score: result.score }));

		setResults(results);
	}, [search]);

	return {
		results,
		search,
		setSearch,
	};
};
