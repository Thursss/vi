import { ReactNode } from 'react';
import { Base } from '../type';

export interface EChartsLinePluginProps extends Base {
  chart: (transformProps: PieTransformedProps) => any;
}

export interface PieTransformedProps {
  width?: number;
  height?: number;
  key: string;
  value: string;
  formData: object[];
}
