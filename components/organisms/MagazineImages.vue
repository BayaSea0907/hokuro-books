<template>
  <div>
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink>＞
    <NuxtLink to="/yakubutsu_ranyo_zutsu/1">1~4話</NuxtLink> -->

    <PageTitle
      :title="pageTitle"
    />

    <ul class="magazine-images">
      <!-- NOTE: indexは0からスタート -->
      <li v-for="(image, index) in imageList" class="magazine-image">
        <h3 v-if="image.story_number != ''" class="magazine-image__title">{{ image.story_number }}話</h3>

        <img class="magazine-image__image" :src="image.src">
      </li>
    </ul>

    <div class='pagelist'>
      <slot name="pagelist"></slot>
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
  }

  .magazine-image {
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__title {
      border-bottom: thick double $gray-2;
      width: auto;
    }

    &__image {
      width: 100%;
      max-width: 100%;
      height: auto;
      margin: 0 auto;

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
