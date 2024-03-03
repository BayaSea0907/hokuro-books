<template>
  <MagazineImages
    page-title="薬物乱用頭痛になる社畜 9〜12話"
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
                { story_number: 9, src: require("~/assets/images/yakubutsu_ranyo_zutsu/09.webp") },
                { story_number: 10, src: require("~/assets/images/yakubutsu_ranyo_zutsu/10.webp") },
                { story_number: 11, src: require("~/assets/images/yakubutsu_ranyo_zutsu/11.webp") },
                { story_number: 12, src: require("~/assets/images/yakubutsu_ranyo_zutsu/12.webp") },
            ]
        };
    },
}
</script>
