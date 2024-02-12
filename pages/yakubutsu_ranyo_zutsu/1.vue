<template>
  <MagazineImages
    page-title="1〜4話"
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
                { story_number: 1, src: require("~/assets/images/yakubutsu_ranyo_zutsu/01.jpg") },
                { story_number: 2, src: require("~/assets/images/yakubutsu_ranyo_zutsu/02.jpg") },
                { story_number: 3, src: require("~/assets/images/yakubutsu_ranyo_zutsu/03.jpg") },
                { story_number: 4, src: require("~/assets/images/yakubutsu_ranyo_zutsu/04.jpg") },
            ]
        };
    },
}
</script>
