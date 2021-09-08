import EChartsLinePlugin from './line';
import EChartsPiePlugin from './pie';

export default function initEChartPlugin() {
  new EChartsLinePlugin().configure('line');
  new EChartsPiePlugin().configure('pie');
}
