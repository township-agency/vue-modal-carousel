<template>
  <aside class="VueCarousel-caption" @click="handleClick">
    <div class="VueCarousel-truncate" v-bind:class="{ 'open': isOpen }">
      <slot></slot>
    </div>
    <div class="VueCarousel-icon" v-bind:class="[{ 'open': isOpen }, { 'closed': !isOpen }]"></div>
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
