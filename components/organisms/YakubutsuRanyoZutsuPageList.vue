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
          { title: '01〜04話', link_path: '/yakubutsu_ranyo_zutsu/1' },
          { title: '05〜08話', link_path: '/yakubutsu_ranyo_zutsu/2' },
          { title: '09〜12話', link_path: '/yakubutsu_ranyo_zutsu/3' },
          { title: '13〜16話', link_path: '/yakubutsu_ranyo_zutsu/4' },
          { title: '17〜20話', link_path: '/yakubutsu_ranyo_zutsu/5' },
          { title: '21話(最終話)', link_path: '/yakubutsu_ranyo_zutsu/6' },
        ]
      };
    }
  }
</script>
