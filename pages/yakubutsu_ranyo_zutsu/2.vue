<template>
  <div>
    <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">10~14話</NuxtLink>

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
          { title: '10話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/10.jpg') },
          { title: '11話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/11.jpg') },
          { title: '12話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/12.jpg') },
          { title: '13話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/13.jpg') },
          { title: '14話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/14.jpg') },
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
