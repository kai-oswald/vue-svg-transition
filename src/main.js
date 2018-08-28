import component from './SvgTransition.vue'

const SvgTransition = {
  install: function(Vue) {
    Vue.component("svg-transition", component);
  },
  component
};
export default SvgTransition;
