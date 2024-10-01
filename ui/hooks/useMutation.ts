import { useEffect, useState } from 'react';

type MutationParams = {
	onSuccess?: (data: any) => void;
	onError?: (error: any) => void;
};

export const useMutation = (fn: (...variables: any[]) => Promise<any>, { onSuccess, onError }: MutationParams = {}) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState<any>(null);

	const mutate = async (...variables: any[]) => {
		try {
			setLoading(true);
			const res = await fn(...variables);
			setData(res);
			return res;
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (data) {
			setData(null);
			onSuccess && onSuccess(data);
		}
	}, [data, onSuccess]);

	useEffect(() => {
		if (error) {
			setError(null);
			onError && onError(error);
		}
	}, [error, onError]);

	return { mutate, loading, error, data };
};
