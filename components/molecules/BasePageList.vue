<template>
  <ul class="pagination">
    <li v-for="item in pageItems" class="pagination-item">
      <span>・</span><NuxtLink :to="item.link_path" class="pagination-item__link">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      // [{ title: 'タイトル', link_path: '/xxxx' }, { ... }] 形式のオブジェクトの配列を受け取る
      pageItems: Array,
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
  }

  .pagination-item {
    font-size: 22px;

    &__link {
      text-decoration: underline;
    }
  }
</style>
