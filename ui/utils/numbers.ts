export function formatNumber(number: number, decimals?: number) {
	return number.toLocaleString('en-US', {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	});
}

export function formatDollar(number: number, decimals?: number) {
	return number.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	});
}

export function formatPercent(number: number, decimals?: number) {
	return number.toLocaleString('en-US', {
		style: 'percent',
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	});
}
