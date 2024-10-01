import { cn } from '@/ui/utils/styles';
import React, { createContext, useContext } from 'react';

export type SliderContextType = {
	value: number;
	progress: number;
	min: number;
	max: number;
};

const SliderContext = createContext({
	value: 0,
	progress: 0,
	min: 0,
	max: 100,
});

export const useSlider = () => useContext(SliderContext);

export interface SliderProps extends React.ComponentPropsWithRef<'input'> {
	children?: React.ReactNode;
	max?: number;
	min?: number;
	onValueChange: (value: number) => void;
	value: number;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
	({ className, min = 0, max = 100, children, onValueChange, value, ...rest }, ref) => {
		const progress = ((value - min) / (max - min)) * 100;

		return (
			<SliderContext.Provider value={{ value, progress, min, max }}>
				<div className={cn('relative', className)}>
					<input
						ref={ref}
						className="w-full h-1.5 focus-visible:ring focus-visible:ring-focus focus:outline-none transition rounded-full appearance-none"
						value={value || 0}
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={value}
						aria-valuetext={`${value}`}
						role="slider"
						min={min}
						max={max}
						{...rest}
						style={{
							background:
								progress || progress === 0
									? `linear-gradient(90deg, #0f172a ${progress}%,#f1f5f9 ${progress}%)`
									: '#f1f5f9',
						}}
						type="range"
						onChange={e => onValueChange(parseFloat(e.target.value))}
					/>
					{children}
				</div>
			</SliderContext.Provider>
		);
	}
);

Slider.displayName = 'Slider';

export const SliderMin = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ className, children, ...rest }, ref) => {
		const { min, value } = useSlider();

		return (
			<div
				ref={ref}
				className={cn(
					'absolute top-full text-xs transition left-0 transform',
					{
						'font-semibold text-text-primary dark:text-text-primary-dark': value <= min,
						'text-text-secondary dark:text-text-secondary-dark': value > min,
					},
					className
				)}
				{...rest}
			>
				{children || min}
			</div>
		);
	}
);

SliderMin.displayName = 'SliderMin';

export const SliderMax = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ className, children, ...rest }, ref) => {
		const { max, value } = useSlider();

		return (
			<div
				ref={ref}
				className={cn(
					'absolute top-full text-xs transition  right-0 transform',
					{
						'font-semibold text-text-primary dark:text-text-primary-dark': value >= max,
						'text-text-secondary dark:text-text-secondary-dark': value < max,
					},
					className
				)}
				{...rest}
			>
				{children || max}
			</div>
		);
	}
);

SliderMax.displayName = 'SliderMax';

export const SliderValue = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
	({ className, children, ...rest }, ref) => {
		const { value, progress, min, max } = useSlider();

		if (value <= min || value >= max) {
			return null;
		}

		return (
			<div
				ref={ref}
				className={cn(
					'absolute top-full animate-fade-in mt-1 font-semibold -translate-x-1/2 text-xs text-text-primary dark:text-text-primary-dark transform',
					className
				)}
				{...rest}
				style={{
					left: `${progress}%`,
				}}
			>
				{children || value}
			</div>
		);
	}
);

SliderValue.displayName = 'SliderValue';
