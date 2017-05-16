<template>
  <aside class="VueCarousel-caption" @click="handleClick">
    <div class="VueCarousel-truncate" v-bind:class="{ 'open': isOpen }">
      <slot></slot>
    </div>
    <div v-if="isOpen" class="VueCarousel-icon open">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10.0005 1.098" enable-background="new 0 0 10.0005 1.098" xml:space="preserve">
        <defs xmlns="http://www.w3.org/2000/svg">
          <filter id="dropshadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
            <feOffset dx="1" dy="0" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.125"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect fill="#FFF" width="10.0005" height="1.098" filter="url(#dropshadow)"/>
      </svg>
    </div>
    <div v-else class="VueCarousel-icon closed">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10.0005 10" enable-background="new 0 0 10.0005 10" xml:space="preserve">
        <defs xmlns="http://www.w3.org/2000/svg">
          <filter id="dropshadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
            <feOffset dx="1" dy="0" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.125"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <polygon fill="#FFF" points="10.0005,4.451 5.5485,4.451 5.5485,0 4.451,0 4.451,4.451 0,4.451 0,5.549 4.451,5.549 4.451,10 5.5485,10 5.5485,5.549 10.0005,5.549 " filter="url(#dropshadow)"/>
      </svg>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "slide-caption",
    data() {
      return {
        isOpen: false,
      }
    },
    methods: {
      handleClick () {
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './scss/var';

  .VueCarousel-caption {

  }

</style>
