import { resolveTxt } from "dns";
import { ComposedChart, ResponsiveContainer, LineProps } from "recharts";

export type ChartProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  data: { [key: string]: number | string }[];
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
};

export const Chart: React.FC<ChartProps> = ({
  children,
  data,
  margin,
  width,
  height,
}) => {
  return (
    <ResponsiveContainer width={width || "99%"} height={height || 300}>
      <ComposedChart
        data={data}
        margin={margin || { top: 10, left: 40, right: 40 }}
      >
        {children}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const CustomBarShape = (props: any) => {
  const { fill, x, y, width, height } = props;
  const radius = 4;

  const path = `M${x},${y + radius}
              a${radius},${radius} 0 0 1 ${radius},-${radius}
              h${width - 2 * radius}
              a${radius},${radius} 0 0 1 ${radius},${radius}
              v${height - radius}
              h-${width}
              z`;

  return <path d={path} fill={fill} />;
};

interface CustomPoint {
  x: number;
  y: number;
  value?: number;
}

interface MultiColorLineProps extends LineProps {
  points?: CustomPoint[];
}

export const MultiColorLineShape: React.FC<any> = ({ data, x, y, dataKey }) => {
  return (
    <g>
      {data.map((entry: any, index: number) => {
        if (index === 0) return null;

        const prevEntry = data[index - 1];
        const x1 = x(prevEntry.date);
        const y1 = y(prevEntry[dataKey]);
        const x2 = x(entry.date);
        const y2 = y(entry[dataKey]);

        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
          console.warn(
            `Skipping line due to NaN value: x1=${x1}, y1=${y1}, x2=${x2}, y2=${y2}`
          );
          return null;
        }

        const isUp = entry[dataKey] >= prevEntry[dataKey];
        const color = isUp ? "black" : "red";

        return (
          <line
            key={`line-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={2}
          />
        );
      })}
    </g>
  );
};

interface DataPoint {
  date: string;
  count: number;
}

// Function to create the points array
const generatePoints = (
  data: DataPoint[],
  xScale: any,
  yScale: any,
  dataKey: keyof DataPoint
) => {
  return data.map((entry) => ({
    x: xScale(entry.date),
    y: yScale(entry[dataKey]),
  }));
};

// CustomLine Component
export const CustomLine: React.FC<any> = ({
  data,
  xAxisMap,
  yAxisMap,
  dataKey,
  strokeWidth,
}) => {
  const xScale = xAxisMap[0].scale;
  const yScale = yAxisMap[0].scale;

  // Generate the points array using dataKey
  const points = generatePoints(data, xScale, yScale, dataKey);

  return (
    <g>
      {points.map((point, index) => {
        if (index === 0) return null;

        const prevPoint = points[index - 1];
        const isUp = point.y <= prevPoint.y;
        const color = isUp ? 'black' : 'red';

        return (
          <line
            key={`line-${index}`}
            x1={prevPoint.x}
            y1={prevPoint.y}
            x2={point.x}
            y2={point.y}
            stroke={color}
            strokeWidth={strokeWidth}
          />
        );
      })}
    </g>
  );
};
