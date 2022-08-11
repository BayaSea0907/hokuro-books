<template>
  <section class="twitter-timeline">
    <a class="twitter-timeline" data-lang="ja" data-width="100%" data-height="300" data-theme="light" href="https://twitter.com/hokuro_90?ref_src=twsrc%5Etfw">Tweets by hokuro_90</a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </section>
</template>

<style lang="scss">
  .twitter-timeline {
    padding: 0 30px 0 30px;
    text-align: center;

    @include greater-than-ipad-mini-width {
      padding: 10px;
    }
  }
</style>

