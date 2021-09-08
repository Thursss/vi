import pluginFactory from '../singleton';
import Register from '../singleton/Register';
import { Base } from '../type/base';

interface EChartsLinePluginProps extends Base {
  chart?: any;
}

class EChartsLinePlugin {
  plugin: Register;
  description: string;
  chart?: any;
  constructor(props?: EChartsLinePluginProps) {
    this.plugin = pluginFactory();
    const { description = 'EChart pie test', chart = <div>Line chart</div> } =
      props ?? {};
    this.description = description;
    this.chart = chart;
  }

  configure(key: string) {
    this.plugin.register(key, {
      description: this.description,
      chart: this.chart,
    });
  }
}

export default EChartsLinePlugin;
