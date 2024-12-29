import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { merge } from 'lodash';

import { useGlobalProvider } from 'hooks';

export const GlobalChart = ({ options, series, type }: Props) => {
  const { isDarkTheme } = useGlobalProvider();

  const defaultChartOptions: ApexOptions = {
    colors: ['#BD7651'],
    chart: {
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    xaxis: {
      labels: {
        show: false,
        style: { colors: isDarkTheme ? '#FFFFFF' : '#1E1E1E' },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      show: false,
      labels: { style: { colors: isDarkTheme ? '#FFFFFF' : '#1E1E1E' } },
    },
    grid: { show: false },
    tooltip: { shared: false, cssClass: 'text-dark' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', width: 1 },
    markers: { size: 3, hover: { size: 6 } },
    legend: { labels: { colors: isDarkTheme ? '#FFFFFF' : '#1E1E1E' } },
  };

  return (
    <Chart
      options={merge(defaultChartOptions, options)}
      series={series}
      type={type}
    />
  );
};

type Props = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexOptions;
  type?:
    | 'area'
    | 'line'
    | 'bar'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'boxPlot'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | 'rangeArea'
    | 'treemap'
    | undefined;
};
