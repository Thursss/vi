import { ReactNode } from 'react';
import { Base } from '../type';

export interface EChartsLinePluginProps extends Base {
  chart: (transformProps: PieTransformedProps) => any;
}

export interface PieTransformedProps {
  height?: number;
  width?: number;
  formData: number[];
}
