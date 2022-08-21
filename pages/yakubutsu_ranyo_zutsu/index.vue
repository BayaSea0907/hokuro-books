<template>
  <body>
    <NuxtLink to="/">🏠トップ</NuxtLink> > <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>

    <h2>話数一覧</h2>
    <ul class="magazines">
      <li v-for="magazine in magazines" class="magazines-item">
        <NuxtLink :to="magazine.link_path" class="magazines-item__title">{{ magazine.title }}</NuxtLink>
      </li>
    </ul>
  </body>
</template>

<script>
  export default {
    data() {
      return {
        magazines: [
          { title: '1〜9話', link_path: '/yakubutsu_ranyo_zutsu/1' },
          { title: '10〜14話', link_path: '/yakubutsu_ranyo_zutsu/2' },
          { title: '15~17話', link_path: '/yakubutsu_ranyo_zutsu/3' },
          { title: '18~19話', link_path: '/yakubutsu_ranyo_zutsu/4' },
          { title: '20話', link_path: '/yakubutsu_ranyo_zutsu/5' },
          { title: '21話', link_path: '/yakubutsu_ranyo_zutsu/6' },
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .magazines {
  }

  .magazines-item {
    &__title {
      text-decoration: underline;
    }
  }
</style>
