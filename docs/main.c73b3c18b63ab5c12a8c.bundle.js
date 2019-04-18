(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(105),__webpack_require__(104);function ncEaseInOutQuart(t,b,c,d){return 1>(t/=d/2)?c/2*t*t*t*t+b:-c/2*((t-=2)*t*t*t-2)+b}var src_SvgTransitionvue_type_script_lang_js_={name:"svg-transition",props:{size:{type:Object,default:function _default(){return{height:32,width:32}}},duration:{type:Number,default:200},trigger:{type:String,default:"click"}},data:function data(){return{states:[],hoverTriggered:!1,time:{start:null,total:this.duration},status:{interacted:!1,animating:!1}}},methods:{performTransition:function performTransition(){this.status.animating||window.requestAnimationFrame(this.triggerAnimation.bind(this.$el))},onClick:function onClick(){this.validateTrigger("click")},onHover:function onHover(){this.validateTrigger("hover")},validateTrigger:function validateTrigger(trigger){"none"===this.trigger.toLowerCase()||this.trigger.toLowerCase()!==trigger||this.performTransition()},triggerAnimation:function triggerAnimation(timestamp){var progress=this.getProgress(timestamp);this.animateIcon(progress),this.checkProgress(progress)},getProgress:function getProgress(timestamp){return this.time.start||(this.time.start=timestamp),timestamp-this.time.start},checkProgress:function checkProgress(progress){if(this.time.total>progress)window.requestAnimationFrame(this.triggerAnimation.bind(this.$el));else{this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null;var index=this.getStatusIndex(this.status.interacted);this.states[index[0]].removeAttribute("aria-hidden"),this.states[index[1]].setAttribute("aria-hidden","true")}},animateIcon:function animateIcon(progress){progress>this.time.total&&(progress=this.time.total),0>progress&&(progress=0);var index=this.getStatusIndex(this.status.interacted);this.states[index[0]].style.display=progress>this.time.total/2?"none":"block",this.states[index[1]].style.display=progress>this.time.total/2?"block":"none",this.scaleIcon(progress,index[0],index[1])},scaleIcon:function scaleIcon(progress,i,j){var scale1=ncEaseInOutQuart(Math.min(progress,this.time.total/2),1,-.2,this.time.total/2).toFixed(2),scale2=ncEaseInOutQuart(Math.max(progress-this.time.total/2,0),.2,-.2,this.time.total/2).toFixed(2);this.states[i].setAttribute("transform","translate("+this.size.width*(1-scale1)/2+" "+this.size.height*(1-scale1)/2+") scale("+scale1+")"),this.states[j].setAttribute("transform","translate("+this.size.width*scale2/2+" "+this.size.height*scale2/2+") scale("+(1-scale2)+")")},getStatusIndex:function getStatusIndex(interacted){return interacted?[1,0]:[0,1]}},mounted:function mounted(){this.states=this.$el.querySelectorAll(".js-transition-icon__state")}},componentNormalizer=__webpack_require__(163),component=Object(componentNormalizer.a)(src_SvgTransitionvue_type_script_lang_js_,function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("svg",{staticClass:"js-transition-icon",attrs:{width:_vm.size.width+"px",height:_vm.size.height+"px",viewBox:"0 0 "+_vm.size.width+" "+_vm.size.height},on:{click:_vm.onClick,mouseenter:_vm.onHover,mouseleave:_vm.onHover}},[_c("g",{staticClass:"js-transition-icon__state"},[_vm._t("initial")],2),_vm._v(" "),_c("g",{staticClass:"js-transition-icon__state",staticStyle:{display:"none"}},[_vm._t("default")],2)])},[],!1,null,null,null);component.options.__file="SvgTransition.vue";__webpack_exports__.a=component.exports},165:function(module,exports,__webpack_require__){__webpack_require__(166),__webpack_require__(243),module.exports=__webpack_require__(244)},244:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(7),__webpack_require__(13),__webpack_require__(11),__webpack_require__(16);var vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(71),_storybook_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(39),_src_SvgTransition_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(164),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(40);vue__WEBPACK_IMPORTED_MODULE_4__.default.component("svg-transition",_src_SvgTransition_vue__WEBPACK_IMPORTED_MODULE_6__.a),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__.withKnobs),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{name:"vue-svg-transition",isFullScreen:!1,showPanel:!0,showNav:!1,isToolshown:!1}}),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){__webpack_require__(313);var req=__webpack_require__(322);req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(125)(module))},313:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(39),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),withStorySource=__webpack_require__(314).withStorySource,__STORY__='import { storiesOf } from \'@storybook/vue\';\r\nimport { number, select } from \'@storybook/addon-knobs\';\r\n\r\n// license: https://fontawesome.com/license\r\nconst svg1 =\r\n  \'<svg slot="initial" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>\';\r\nconst svg2 =\r\n  \'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>\';\r\n\r\nconst stories = storiesOf(\'SvgTransition\', module);\r\nconst triggers = {\r\n  Click: \'click\',\r\n  Hover: \'hover\',\r\n  None: \'none\',\r\n};\r\n\r\nstories.add(\'Default\', () => ({\r\n  props: {\r\n    width: {\r\n      default: number(\'Width\', 100),\r\n    },\r\n    height: {\r\n      default: number(\'Height\', 100),\r\n    },\r\n    trigger: {\r\n      default: select(\'Trigger\', triggers, \'click\'),\r\n    },\r\n  },\r\n  computed: {\r\n    size() {\r\n      return {\r\n        width: this.width,\r\n        height: this.height,\r\n      };\r\n    },\r\n    showTriggerButton() {\r\n      return this.trigger === \'none\';\r\n    },\r\n  },\r\n  methods: {\r\n    performTransition() {\r\n      this.$refs.transition.performTransition();\r\n    },\r\n  },\r\n  template: `<div><svg-transition ref="transition" :size="size" :trigger="trigger">${svg1}${svg2}</svg-transition><button v-if="showTriggerButton" @click="performTransition">Trigger transition</button></div>`,\r\n}));\r\n',__ADDS_MAP__={},stories=Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("SvgTransition",module).addDecorator(withStorySource('import { storiesOf } from \'@storybook/vue\';\r\nimport { number, select } from \'@storybook/addon-knobs\';\r\n\r\n// license: https://fontawesome.com/license\r\nconst svg1 =\r\n  \'<svg slot="initial" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>\';\r\nconst svg2 =\r\n  \'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>\';\r\n\r\nconst stories = storiesOf(\'SvgTransition\', module);\r\nconst triggers = {\r\n  Click: \'click\',\r\n  Hover: \'hover\',\r\n  None: \'none\',\r\n};\r\n\r\nstories.add(\'Default\', () => ({\r\n  props: {\r\n    width: {\r\n      default: number(\'Width\', 100),\r\n    },\r\n    height: {\r\n      default: number(\'Height\', 100),\r\n    },\r\n    trigger: {\r\n      default: select(\'Trigger\', triggers, \'click\'),\r\n    },\r\n  },\r\n  computed: {\r\n    size() {\r\n      return {\r\n        width: this.width,\r\n        height: this.height,\r\n      };\r\n    },\r\n    showTriggerButton() {\r\n      return this.trigger === \'none\';\r\n    },\r\n  },\r\n  methods: {\r\n    performTransition() {\r\n      this.$refs.transition.performTransition();\r\n    },\r\n  },\r\n  template: `<div><svg-transition ref="transition" :size="size" :trigger="trigger">${svg1}${svg2}</svg-transition><button v-if="showTriggerButton" @click="performTransition">Trigger transition</button></div>`,\r\n}));\r\n',__ADDS_MAP__)),triggers={Click:"click",Hover:"hover",None:"none"};stories.add("Default",function(){return{props:{width:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Width",100)},height:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Height",100)},trigger:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Trigger",triggers,"click")}},computed:{size:function size(){return{width:this.width,height:this.height}},showTriggerButton:function showTriggerButton(){return"none"===this.trigger}},methods:{performTransition:function performTransition(){this.$refs.transition.performTransition()}},template:'<div><svg-transition ref="transition" :size="size" :trigger="trigger">'.concat('<svg slot="initial" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>').concat('<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>','</svg-transition><button v-if="showTriggerButton" @click="performTransition">Trigger transition</button></div>')}})}.call(this,__webpack_require__(125)(module))},322:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=322}},[[165,1,2]]]);
//# sourceMappingURL=main.c73b3c18b63ab5c12a8c.bundle.js.map