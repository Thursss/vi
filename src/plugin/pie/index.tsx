import pluginFactory from '../singleton';
import Register from '../singleton/Register';
import { Base } from '../type/base';

interface EChartsPiePluginProps extends Base {
  chart?: any;
}

class EChartsPiePlugin {
  plugin: Register;
  description: string;
  chart?: any;
  constructor(props?: EChartsPiePluginProps) {
    this.plugin = pluginFactory();
    const { description = 'EChart pie test', chart = <div>Pie chart</div> } =
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

export default EChartsPiePlugin;
