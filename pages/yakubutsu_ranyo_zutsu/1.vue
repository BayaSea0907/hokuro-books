<template>
  <div>
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">1~4話</NuxtLink> -->

    <PageTitle
      title="1~4話"
    />

    <ul class="magazine-images">
      <li v-for="magazineImage in magazineImages">
        <h3>{{ magazineImage.title }}</h3>
        <img :src="magazineImage.src" class="magazine-images__image">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        magazineImages: [
          { title: '1話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/01.jpg') },
          { title: '2話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/02.jpg') },
          { title: '3話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/03.jpg') },
          { title: '4話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/04.jpg') },
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .magazine-images {
    &__image {
      width: 600px;
      height: auto;
    }
  }
</style>
