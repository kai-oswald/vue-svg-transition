import { storiesOf } from '@storybook/vue';
import { number, select } from '@storybook/addon-knobs';

// license: https://fontawesome.com/license
const svg1 = '<svg slot="initial" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>';
const svg2 = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>';

const stories = storiesOf("SvgTransition", module);
const triggers = {
    Click: 'click',
    Hover: 'hover',
    None: 'none'
};

stories.add('Default', () => ({
        props: {
            width: {
                default: number('Width', 100)
            },
            height: {
                default: number('Height', 100)
            },
            trigger: {
                default: select('Trigger', triggers, 'click')
            }           
        },
        computed: {
            size() {
                return {
                    width: this.width,
                    height: this.height
                }
            },
            showTriggerButton() {
                return this.trigger === "none";
            }
        },
        methods: {
            performTransition() {
                this.$refs.transition.performTransition();
            }
        },
        template: `<div><svg-transition ref="transition" :size="size" :trigger="trigger">${svg1}${svg2}</svg-transition><button v-if="showTriggerButton" @click="performTransition">Trigger transition</button></div>`
    }));