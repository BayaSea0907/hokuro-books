export default {
  target: 'static',
  modules: [
    '@nuxtjs/style-resources'
  ],
  components: {
    dirs: [
      '~/components',
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms',
    ]
  },
  styleResources: {
    scss: [
      '~/assets/stylesheets/common/variables.scss',
      '~/assets/stylesheets/common/breakpoint.scss',
    ]
  },
  css: [
    '~/assets/stylesheets/common/core.scss',
  ],
  head: {
    title: 'ほくろマンガ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes, shrink-to-fit=no' },
      { name: 'author', content: 'ばや' },
      { name: 'description', content: '日常のひとこまを漫画に描いて発信している「ほくろ」さんを応援するサイトです。' },
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }]
    ]
  }
}
