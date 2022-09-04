<template>
  <div>
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">10~14話</NuxtLink> -->

    <PageTitle
      title="5~8話"
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
          { title: '5話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/05.jpg') },
          { title: '6話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/06.jpg') },
          { title: '7話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/07.jpg') },
          { title: '8話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/08.jpg') },
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
