import { ConfigProvider, Button } from "ant-design-vue";
const components = [ConfigProvider, Button];

export default {
  install: Vue => {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};
