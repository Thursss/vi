import { EChartsLinePluginProps } from '../type';
import ChartLine from './chart';

const defaultProps: EChartsLinePluginProps = {
  description: 'EChart pie test',
  chart: () => ChartLine({}),
};

export default defaultProps;
