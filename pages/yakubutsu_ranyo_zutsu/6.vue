<template>
  <div>
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">21話</NuxtLink> -->

    <PageTitle
      title="21話(最終話)"
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
          { title: '21話', src: require('~/assets/images/yakubutsu_ranyo_zutsu/21.jpg') },
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
