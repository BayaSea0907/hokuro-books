<template>
  <BasePageList
    :page-items="magazines"
  />
</template>

<script>
  import BasePageList from './../molecules/BasePageList.vue'

  export default {
    components: {
      BasePageList,
    },
    data() {
      return {
        magazines: [
          { title: '01〜03話', link_path: '/saikopasu_joshi/1' },
          { title: '04〜07話', link_path: '/saikopasu_joshi/2' },
          { title: '08〜11話', link_path: '/saikopasu_joshi/3' },
          { title: '12〜14話', link_path: '/saikopasu_joshi/4' },
        ]
      };
    }
  }
</script>
