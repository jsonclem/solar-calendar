'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/ui/utils/styles';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn('p-3 inline-block', className)}
			classNames={{
				months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
				month: 'space-y-4',
				caption: 'flex justify-center pt-1 relative items-center',
				caption_label: 'text-sm font-medium',
				nav: 'space-x-1 flex items-center',
				nav_button:
					'flex items-center justify-center transition opacity-70 hover:opacity-100 hover:bg-hint w-7 h-7 rounded-md text-text-secondary',
				nav_button_previous: 'absolute left-1',
				nav_button_next: 'absolute right-1',
				table: 'w-full border-collapse space-y-1',
				head_row: 'flex',
				head_cell: 'text-text-secondary rounded-md w-8 font-normal text-[0.8rem]',
				row: 'flex w-full mt-2',
				cell: cn(
					'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary [&:has([aria-selected].day-outside)]:bg-primary/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
					{
						'[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md':
							props.mode === 'range',
						'[&:has([aria-selected])]:rounded-md': true,
					}
				),
				day: 'w-8 h-8 flex items-center transition justify-center rounded-md hover:bg-hint',
				day_range_start: 'day-range-start',
				day_range_end: 'day-range-end',
				day_selected:
					'bg-primary text-white hover:bg-primary outline-none focus:outline-none focus-visible:ring focus-visible:ring-focus',
				day_today: 'bg-hint text-text-primary',
				day_outside:
					'day-outside text-text-secondary transition opacity-50 aria-selected:text-white aria-selected:opacity-30',
				day_disabled: 'text-text-secondary opacity-50',
				day_range_middle: 'aria-selected:bg-primary aria-selected:text-white',
				day_hidden: 'invisible',
				...classNames,
			}}
			components={{
				IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
				IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
			}}
			{...props}
		/>
	);
}
Calendar.displayName = 'Calendar';

export { Calendar };
