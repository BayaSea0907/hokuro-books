<template>
  <div class="content">
    <h3 class="content__title">{{ title }}</h3>
    <div class="content__description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    &__title {
      display: inline-block;
      width: auto;
      border-bottom: solid $gray-1;
      margin-bottom: 10px;
      padding-top: 20px;
    }

    &__description {
      a {
        text-decoration: underline;
      }
    }
  }
</style>
