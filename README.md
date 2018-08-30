![npm version badge](https://img.shields.io/npm/v/vue-svg-transition.svg)

# vue-svg-transition
> Create 2-state, SVG-powered animated icons

inspired by [Icon Transition Generator](https://blog.nucleoapp.com/create-2-state-svg-powered-animated-icons-76ed19160a7e)

## Quick start
Currently it's necessary to have a webpack setup with [`vue-loader`](https://github.com/vuejs/vue-loader)

```cmd
npm install --save vue-svg-transition
```
```js
import Vue from 'vue';
import SvgTransition from 'vue-svg-transition';

Vue.use(SvgTransition);
```

## Demo
Soon
## Template Example
It is recommended to use [`vue-svg-loader`](https://www.npmjs.com/package/vue-svg-loader) so we can import our SVGs from external files.
But it's possible to use inline SVG as well.

```html
<template>
    <svg-transition :size="size">
        <MyIcon slot="initial" />
        <MyOtherIcon />
    </svg-transition>
</template>

<script>
import MyIcon from "./assets/MyIcon.svg";
import MyOtherIcon from "./assets/MyOtherIcon.svg";

export default {
    components: {
        MyIcon,
        MyOtherIcon
    }
    data() {
        return {
            size: {
                width: 48,
                height: 48
            }
        }
    }
}
</script>
```

## Documentation
### Props
**size**

The size of the SVG viewbox.
- type: `Object`
- default: `{ width: 32, height: 32 }`

**duration**

The duration of the transition in ms
- type: `Number` 
- default: `200`

### Slots
**initial**

The svg that will be displayed in the initial state

**default**

The other svg that will be transitioned to
