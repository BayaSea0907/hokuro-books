<template>
  <div class="wrapper">
    <LayoutHeader />
    <LayoutInformation />

    <div class="main">
      <div class="main__body">
        <Nuxt />
      </div>

      <div class="main__sidebar">
        <LayoutSidebar />
      </div>
    </div>

    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
  }

  .main {
    display: block;
    padding: 20px 16px 20px 16px;

    @include greater-than-ipad-mini-width {
      display: flex;
    }
  }

  .main__body {
    display: inline-block;
    width: 100%;

    @include greater-than-ipad-mini-width {
      width: 70%;
    }
  }

  .main__sidebar {
    display: inline-block;
    width: 100%;

    @include greater-than-ipad-mini-width {
      width: 30%;
      justify-content: center;
    }
  }
</style>
