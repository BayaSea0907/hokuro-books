<template>
  <MagazineImages
    page-title="13〜16話"
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
                { story_number: 13, src: require("~/assets/images/yakubutsu_ranyo_zutsu/13.jpg") },
                { story_number: 14, src: require("~/assets/images/yakubutsu_ranyo_zutsu/14.jpg") },
                { story_number: 15, src: require("~/assets/images/yakubutsu_ranyo_zutsu/15.jpg") },
                { story_number: 16, src: require("~/assets/images/yakubutsu_ranyo_zutsu/16.jpg") },
            ]
        };
    },
}
</script>
