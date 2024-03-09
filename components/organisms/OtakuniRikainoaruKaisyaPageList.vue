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
          { title: '01〜04話', link_path: '/otakuni_rikainoaru_kaisya/1' },
          { title: '05〜08話', link_path: '/otakuni_rikainoaru_kaisya/2' },
        ]
      };
    }
  }
</script>
