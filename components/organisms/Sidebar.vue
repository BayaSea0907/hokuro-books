<template>
  <aside class="sidebar">
    <section class="profile">
    </section>

    <TwitterTimeline />
    <RakutenAffiliate />
  </aside>
</template>

<style lang="scss">
  .sidebar {
    display: inline-block;
    width: 100%;

    @include greater-than-ipad-mini-width {
      width: 30%;
      justify-content: center;
    }
  }
</style>
