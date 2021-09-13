import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { init, ECharts } from 'echarts'

import { EChartsProps } from '../type';

// const Styles = styled(EChartsStylesProps)`
//   height: ${({ height }) => height};
//   width: ${({ width }) => width};
// `;

const EChartCore: FC<EChartsProps> = ({ children, width, height, echartOptions }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ECharts>();
  return <div ref={divRef} />;
};

export default EChartCore;
