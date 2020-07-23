import { Button } from "element-ui";

const components = [Button];

export default {
  install: Vue => {
    components.forEach(component => {
      Vue.use(component);
    });
  }
};
