<template>
  <div>
    <Header />
    <Information />

    <div class="main">
      <div class="main__body">
        <Nuxt />
      </div>

      <div class="main__sidebar">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    display: block;

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
