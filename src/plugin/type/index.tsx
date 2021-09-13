import { ReactNode, FC } from 'react';

export type EChartsStylesProps = {
  height: number;
  width: number;
};

export interface EChartsProps {
  height: number;
  width: number;
  echartOptions: EChartsOption;
}

export interface Base {
  description: string;
}

export interface EChartsLinePluginProps extends Base {
  chart?: any;
}

export interface EChartsPiePluginProps extends Base {
  chart?: any;
}
