<template>
  <MagazineImages
    page-title="薬物乱用頭痛になる社畜 5〜8話"
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
                { story_number: 5, src: require("~/assets/images/yakubutsu_ranyo_zutsu/05.webp") },
                { story_number: 6, src: require("~/assets/images/yakubutsu_ranyo_zutsu/06.webp") },
                { story_number: 7, src: require("~/assets/images/yakubutsu_ranyo_zutsu/07.webp") },
                { story_number: 8, src: require("~/assets/images/yakubutsu_ranyo_zutsu/08.webp") },
            ]
        };
    },
}
</script>
