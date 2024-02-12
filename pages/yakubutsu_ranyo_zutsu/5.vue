<template>
  <MagazineImages
    page-title="薬物乱用頭痛になる社畜 17〜20話"
    :image-list="magazineImages"
  >
    <template v-slot:pagelist>
      <YakubutsuRanyoZutsuPageList />
    </template>
  </MagazineImages>
</template>

<script>
  export default {
    data() {
        return {
            magazineImages: [
                { story_number: 17, src: require("~/assets/images/yakubutsu_ranyo_zutsu/17.jpg") },
                { story_number: 18, src: require("~/assets/images/yakubutsu_ranyo_zutsu/18.jpg") },
                { story_number: 19, src: require("~/assets/images/yakubutsu_ranyo_zutsu/19.jpg") },
                { story_number: 20, src: require("~/assets/images/yakubutsu_ranyo_zutsu/20.jpg") },
            ]
        };
    },
}
</script>
