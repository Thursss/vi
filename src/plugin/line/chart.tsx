import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { EChartsOption } from 'echarts';

import EChartCore from '../chart';
import { PieTransformedProps } from './type';

const ChartLine: FC<PieTransformedProps> = (props) => {
  const { width, height, formData } = props;
  // TODO
  const echartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        data: formData,
      },
    ],
  };
  return (
    <EChartCore
      width={width}
      height={height}
      echartOptions={echartOptions}
    ></EChartCore>
  );
};

export default ChartLine;
