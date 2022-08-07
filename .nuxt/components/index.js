export { default as RakutenAffiliate } from '../../components/atoms/RakutenAffiliate.vue'
export { default as TwitterTimeline } from '../../components/atoms/TwitterTimeline.vue'
export { default as Header } from '../../components/organisms/Header.vue'
export { default as Information } from '../../components/organisms/Information.vue'
export { default as Sidebar } from '../../components/organisms/Sidebar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
