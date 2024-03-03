<template>
  <div class="information">
    <img class="information__key-visual" src="~/assets/images/key_visual.webp">
  </div>
</template>

<style lang="scss" scoped>
.information {
  border-top: 1px solid $gray-1;
  border-bottom: 1px solid $gray-1;
  background-color: $gray-3;
}

.information__key-visual {
  width: auto;
  height: 150px;

  /* 中央寄せ用 */
  display: block;
  margin: 0 auto 0 auto;

  @include greater-than-ipad-mini-width {
    height: 300px;
  }
}
</style>
