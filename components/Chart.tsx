'use client';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { useTheme } from 'next-themes';
import { chartData } from '@/constant/data-json';
const Chart = () => {
  const { theme } = useTheme();
  const axisColor = theme === 'dark' ? '#FFFFFF' : '#64748B';
  return (
    <div className="bg-white flex-1 border border-solid border-[#F2F2F7] dark:border-dark-300 xl:px-1 md:py-[20px] rounded-[5px] dark:bg-dark-300 h-[320px] max-h-[320px] text-[#64748B] lg:w-1/2 dark:text-white w-full ">

      {/* lg:min-w-[554px] */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={474}
          height={40}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="2 2" stroke={axisColor} />
          <XAxis dataKey="name" stroke={axisColor} tick={{ fontSize: 10 }} />
          <YAxis
            domain={[200, 'auto']}
            ticks={[0, 200, 400, 600, 800, 1000]}
            stroke={axisColor}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />

          <Bar dataKey="value" fill="#8576FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
