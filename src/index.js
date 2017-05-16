import Carousel from "./Carousel.vue"
import Slide from "./Slide.vue"
import SlideCaption from "./SlideCaption.vue"

const install = (Vue) => {
  Vue.component("carousel", Carousel)
  Vue.component("slide", Slide)
  Vue.component("slide-caption", SlideCaption)
}

export default {
  install,
}

export {
  Carousel,
  Slide,
  SlideCaption
}
