# vue-svg-transition
> Create 2-state, SVG-powered animated icons

inspired by [Icon Transition Generator](https://blog.nucleoapp.com/create-2-state-svg-powered-animated-icons-76ed19160a7e)

## Demo
Soon
## Template Example
It is recommended to use [`vue-svg-loader`](https://www.npmjs.com/package/vue-svg-loader).

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

## Quick start
```cmd
npm install --save vue-svg-transition
```
```js
import Vue from 'vue';
import SvgTransition from 'vue-svg-transition';

Vue.use(SvgTransition);
```

## Documentation
### Props
**size**

The size of the svg viewbox.
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