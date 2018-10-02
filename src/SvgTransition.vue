<template>
  <svg class="js-transition-icon" :width="size.width + 'px'" :height="size.height + 'px'" :viewBox="'0 0 ' + size.width + ' ' + size.height"
    @click="onClick" @mouseenter="onHover" @mouseleave="onHover">
    <g class="js-transition-icon__state">
      <slot name="initial"></slot>
    </g>
    <g class="js-transition-icon__state" style="display:none">
      <slot></slot>
    </g>
  </svg>
</template>

<script>
export default {
  name: "svg-transition",
  props: {
    size: {
      type: Object,
      default: function() {
        return {
          height: 32,
          width: 32
        };
      }
    },
    duration: {
      type: Number,
      default: 200
    },
    trigger: {
      type: String,
      default: "click"
    }
  },
  data() {
    return {
      states: [],
      hoverTriggered: false,
      time: {
        start: null,
        total: this.duration
      },
      status: {
        interacted: false,
        animating: false
      }
    };
  },
  methods: {
    performTransition() {
      if (this.status.animating) return;
      window.requestAnimationFrame(this.triggerAnimation.bind(this.$el));
    },
    onClick() {
      this.validateTrigger("click");
    },
    onHover() {
      this.validateTrigger("hover");
    },
    validateTrigger(trigger) {
      if(this.trigger.toLowerCase() === "none") {
        return;
      }
      if (this.trigger.toLowerCase() !== trigger) {
        return;
      }
      this.performTransition();
    },
    triggerAnimation(timestamp) {
      let progress = this.getProgress(timestamp);
      this.animateIcon(progress);
      this.checkProgress(progress);
    },
    getProgress(timestamp) {
      if (!this.time.start) this.time.start = timestamp;
      return timestamp - this.time.start;
    },
    checkProgress(progress) {
      //check if animation is complete
      var self = this;
      if (this.time.total > progress) {
        //animation is not over -> start new animation loop
        window.requestAnimationFrame(self.triggerAnimation.bind(self.$el));
      } else {
        //animation is over -> update object properties + group aria attributes
        this.status = {
          interacted: !this.status.interacted,
          animating: false
        };
        this.time.start = null;
        var index = this.getStatusIndex(this.status.interacted);
        this.states[index[0]].removeAttribute("aria-hidden");
        this.states[index[1]].setAttribute("aria-hidden", "true");
      }
    },
    animateIcon(progress) {
      if (progress > this.time.total) progress = this.time.total;
      if (0 > progress) progress = 0;
      var index = this.getStatusIndex(this.status.interacted);
      //update group visibility
      this.states[index[0]].style.display =
        progress > this.time.total / 2 ? "none" : "block";
      this.states[index[1]].style.display =
        progress > this.time.total / 2 ? "block" : "none";
      //scale group elements
      this.scaleIcon(progress, index[0], index[1]);
    },
    scaleIcon(progress, i, j) {
      var scale1 = ncEaseInOutQuart(
          Math.min(progress, this.time.total / 2),
          1,
          -0.2,
          this.time.total / 2
        ).toFixed(2),
        scale2 = ncEaseInOutQuart(
          Math.max(progress - this.time.total / 2, 0),
          0.2,
          -0.2,
          this.time.total / 2
        ).toFixed(2);
      this.states[i].setAttribute(
        "transform",
        "translate(" +
          (this.size.width * (1 - scale1)) / 2 +
          " " +
          (this.size.height * (1 - scale1)) / 2 +
          ") scale(" +
          scale1 +
          ")"
      );
      this.states[j].setAttribute(
        "transform",
        "translate(" +
          (this.size.width * scale2) / 2 +
          " " +
          (this.size.height * scale2) / 2 +
          ") scale(" +
          (1 - scale2) +
          ")"
      );
    },
    getStatusIndex(interacted) {
      return interacted ? [1, 0] : [0, 1];
    }
  },
  mounted() {
    this.states = this.$el.querySelectorAll(".js-transition-icon__state");
  }
};

function ncEaseInOutQuart(t, b, c, d) {
  if (1 > (t /= d / 2)) return (c / 2) * t * t * t * t + b;
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
}
</script>
