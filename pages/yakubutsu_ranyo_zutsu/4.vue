<template>
  <MagazineImages
    page-title="薬物乱用頭痛になる社畜 13〜16話"
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
                { story_number: 13, src: require("~/assets/images/yakubutsu_ranyo_zutsu/13.webp") },
                { story_number: 14, src: require("~/assets/images/yakubutsu_ranyo_zutsu/14.webp") },
                { story_number: 15, src: require("~/assets/images/yakubutsu_ranyo_zutsu/15.webp") },
                { story_number: 16, src: require("~/assets/images/yakubutsu_ranyo_zutsu/16.webp") },
            ]
        };
    },
}
</script>
