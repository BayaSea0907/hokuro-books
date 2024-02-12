<template>
  <div class="page-title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    },
    head() {
      return {
        title: this.title,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page-title {
    padding: 0 10px 3px 10px;
    margin-bottom: 10px;
    border-bottom: solid $gray-1;
  }
</style>
