import { Button, Input } from "element-ui";

const components = [Button, Input];

export default {
  install: Vue => {
    components.forEach(component => {
      Vue.use(component);
    });
  }
};
