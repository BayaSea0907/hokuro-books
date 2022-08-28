<template>
  <div class="page-title">
    <h2>{{ title }}</h2>
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
  .page-title {
    margin-bottom: 10px;
    border-bottom: solid $gray-1;
  }
</style>
