<template>
  <div>
    <!-- TODO: パンくずリスト表示したい -->
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink> > <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink> -->

    <PageTitle
      title="話数一覧"
    />

    <ul class="magazines">
      <li v-for="magazine in magazines" class="magazines-item">
        <NuxtLink :to="magazine.link_path" class="magazines-item__title">{{ magazine.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        magazines: [
          { title: '01〜04話', link_path: '/yakubutsu_ranyo_zutsu/1' },
          { title: '05~08話', link_path: '/yakubutsu_ranyo_zutsu/2' },
          { title: '09~12話', link_path: '/yakubutsu_ranyo_zutsu/3' },
          { title: '13~16話', link_path: '/yakubutsu_ranyo_zutsu/4' },
          { title: '17~20話', link_path: '/yakubutsu_ranyo_zutsu/5' },
          { title: '21話(最終話)', link_path: '/yakubutsu_ranyo_zutsu/6' },
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .magazines {
  }

  .magazines-item {
    font-size: 22px;
    list-style: square;

    &__title {
      text-decoration: underline;
    }
  }
</style>
