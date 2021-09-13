import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import EChartCore from '../chart';

const ChartLine: FC<any> = (props) => {
  const { children, option } = props ?? {};
  return <EChartCore width={100} height={50} echartOptions={option}></EChartCore>;
};

export default ChartLine;
