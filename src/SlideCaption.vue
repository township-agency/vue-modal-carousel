<template>
  <div class="VueCarousel-caption">
    <aside class="slide-caption" @click="handleClick">
      <div class="truncate" v-bind:class="{ 'open': isOpen }">
        <slot></slot>
      </div>
      <div class="slide-icon" v-bind:class="[{ 'open': isOpen }, { 'closed': !isOpen }]"></div>
    </aside>
  </div>
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
