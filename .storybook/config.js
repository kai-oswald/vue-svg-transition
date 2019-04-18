import Vue from 'vue';

import { configure, addDecorator, addParameters } from '@storybook/vue';
import SvgTransition from '../src/SvgTransition.vue';
import { withKnobs } from '@storybook/addon-knobs';

Vue.component("svg-transition", SvgTransition);

addDecorator(withKnobs);
addParameters({
    options: {
      name: 'vue-svg-transition',
      isFullScreen: false,
      showPanel: true,
      showNav: false,
      isToolshown: false,
      // more configuration here
    },
  });

function loadStories() {
  require('../stories');
  // You can require as many stories as you need.

  const req = require.context('../stories', true, /\.index\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

