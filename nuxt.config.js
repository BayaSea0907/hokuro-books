export default {
  target: 'static',
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-PVPFB923',
    // 開発中も常にGTMのイベントを発生させたい場合はtrueを設定する。
    // ※falseだと本番でも無効になってしまうので注意。
    enabled: true,
  },
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
    '~/assets/stylesheets/common/normalize.scss',
  ],
  head: {
    titleTemplate: 'ほくろマンガ | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes, shrink-to-fit=no' },
      { name: 'author', content: 'ほくろ' },
      { name: 'description', content: '日常のひとこまを漫画に描いて発信している「ほくろ」さんを応援するサイトです。' },
      { name: 'keywords', content: '漫画, マンガ, エッセイ, エッセイマンガ, エッセイ漫画, ４コマ' },

      // Open Graph Protocol
      { property: 'og:local',  content: 'ja_JP' },
      { property: 'og:type',  content: 'website' },
      { property: 'og:url',   content: 'https://hokuro-books.web.app' },
      { property: 'og:image', content: 'https://hokuro-books.web.app/og_image.png' },
      { property: 'og:site_name', content: 'ほくろマンガ' },
      { property: 'og:title', content: 'ほくろマンガ' },
      { property: 'og:description', content: '日常のひとこまを漫画に描いて発信している「ほくろ」さんを応援するサイトです。' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@hokuro_90' },

      // Google Search Console
      { name: 'google-site-verification', content: 'h2hijYFBqvtUSBQJ1Q3Xf2TdR8c7gCbs7AVKTMKREWQ' },
      // クローリングの無効化
      // { name: 'robots', content: 'noindex' },
    ],
    link: [
      // ファビコン
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // ファビコン　iPhone用
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
    ],
    script: [
      // GoogleAdsenceの「ディスプレイ広告(レスポンシブ)」用
      {
        pbody: true, // <bdoy>直後に配置
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2278159842551677',
        crossorigin: 'anonymous',
      },
      // GoogleAdsenceの「ディスプレイ広告(レスポンシブ)」用
      {
        pbody: true,
        innerHTML: '(adsbygoogle = window.adsbygoogle || []).push({});',
      }
    ],
    ins: [
      // GoogleAdsenceの「ディスプレイ広告(レスポンシブ)」用
      {
        pbody: true,
        class: 'adsbygoogle',
        style: 'display:block',
        dataAdFormat: 'autorelaxed',
        dataAdClient: 'ca-pub-2278159842551677',
        dataAdSlot: '2173204058',
      }
    ],
    __dangerouslyDisableSanitizers: ['meta', 'script']
  }
}
