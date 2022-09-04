<template>
  <div>
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">1~4話</NuxtLink> -->

    <PageTitle
      :title="pageTitle"
    />

    <ul class="magazine-images">
      <li v-for="image in imageList">
        <h3>{{ image.story_number }}話</h3>
        <img :src="image.src" class="magazine-images__image">
      </li>
    </ul>

    <div class='pagelist'>
      <YakubutsuRanyoZutsuPageList />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: String,
      // [{ story_number: 1, src: require("~assets/images/xxxx/01.jpg") }, { ... }] 形式のオブジェクトの配列を受け取る
      imageList: Array,
    }
  }
</script>

<style lang="scss" scoped>
  .magazine-images {
    &__image {
      width: 100%;
      max-width: 100%;
      height: auto;

      @include greater-than-ipad-mini-width {
        max-width: 600px;
      }
    }
  }

  .pagelist {
    text-align: center;
    padding: 15px 0 15px 0;
    border-top: solid $gray-1;
  }

</style>
