<template>
  <header class="header">
    <h1 class="header__title"><nuxt-link to="/">ほくろマンガ</nuxt-link></h1>
  </header>
</template>

<style lang="scss">
.header {
  padding: 5px 20px 5px 20px;
  border-bottom: 1px dotted $gray-1;
}

.header__title {
  font-size: 30px;

  @include max-mq('md') {
    font-size: 24px;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
