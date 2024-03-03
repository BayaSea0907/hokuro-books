<template>
  <MagazineImages
    page-title="薬物乱用頭痛になる社畜 21話(最終話)"
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
                { story_number: 21, src: require("~/assets/images/yakubutsu_ranyo_zutsu/21.webp") },
            ]
        };
    },
}
</script>
