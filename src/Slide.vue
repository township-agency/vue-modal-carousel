<template>
  <div v-bind:class="slideClass">
    <slot></slot>
    <button class="VueCarousel-expand slide-nomodal" @click="handleClick">EXPAND</button>
  </div>
</template>

<script>
  import SlideCaption from "./SlideCaption.vue"

  export default {
    name: "slide",
    props: ['contain'],
    components: {
      SlideCaption
    },
    data() {
      return {
        width: null,
        parentContainer: this.$parent
      }
    },
    computed: {
      slideClass() {
        return {
          'VueCarousel-slide': true,
          'VueCarousel-contain': this.contain,
        }
      }
    },
    methods: {
      handleClick () {
        return this.parentContainer.modalToggle(this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './scss/var';

  .VueCarousel-contain {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
  }

  .VueCarousel-slide {
    position: relative;
    transition: .3s ease all;
  }

  .VueCarousel-expand {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    z-index: $z-index + 2;
  }

</style>
