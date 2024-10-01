import { format as formatDateFn, addMinutes } from 'date-fns';

export const dateFormats: { [name: string]: string } = {
	iso: 'yyyy-MM-dd',
	isoDateTime: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
	short: 'MMM do, yy',
	full: 'MMMM do, yyyy',
	monthYear: 'MMMM yyyy',
	time: 'HH:mm:ss',
};

export function formatDate(input: string | number | Date, format?: string, local?: boolean): string {
	if (!input) return '';

	let date: Date;

	try {
		date = new Date(input);
		if (isNaN(date.getTime())) {
			throw new Error('Invalid date format');
		}
	} catch (error) {
		console.error('Error parsing date:', input, error);
		return '';
	}

	const formattedType = format ?? dateFormats.full;
	const finalDate = local ? date : addMinutes(date, date.getTimezoneOffset());

	return formatDateFn(finalDate, formattedType);
}
