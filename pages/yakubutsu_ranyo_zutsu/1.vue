<template>
  <div>
    <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">1~9話</NuxtLink>

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
          { title: '1話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/01.jpg') },
          { title: '2話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/02.jpg') },
          { title: '3話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/03.jpg') },
          { title: '4話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/04.jpg') },
          { title: '5話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/05.jpg') },
          { title: '6話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/06.jpg') },
          { title: '7話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/07.jpg') },
          { title: '8話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/08.jpg') },
          { title: '9話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/09.jpg') },
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
