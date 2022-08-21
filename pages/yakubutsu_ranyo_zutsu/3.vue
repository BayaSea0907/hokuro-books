<template>
  <div>
    <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">15~16話</NuxtLink>

    <h2>1~9話</h2>
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
          { title: '15話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/15.jpg') },
          { title: '16話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/16.jpg') },
          { title: '17話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/17.jpg') },
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
