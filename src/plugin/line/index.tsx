import pluginFactory from '../singleton';
import Register from '../singleton/Register';
import defaultProps from './defaultProps';
import { EChartsLinePluginProps } from '../type';

class EChartsLinePlugin {
  plugin: Register;
  description: string;
  chart?: any;
  constructor(props?: EChartsLinePluginProps) {
    this.plugin = pluginFactory();
    props = { ...defaultProps, ...(props ?? {}) };
    const { description, chart } = props;
    this.description = description;
    this.chart = chart();
  }

  configure(key: string) {
    this.plugin.register<EChartsLinePluginProps>(key, {
      description: this.description,
      chart: this.chart,
    });
  }
}

export default EChartsLinePlugin;
