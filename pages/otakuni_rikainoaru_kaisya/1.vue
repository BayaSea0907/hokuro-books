<template>
  <MagazineImages
    page-title="オタクに理解のある会社 1〜4話"
    :image-list="magazineImages"
  >
    <template v-slot:pagelist>
      <OtakuniRikainoaruKaisyaPageList/>
    </template>
  </MagazineImages>
</template>

<script>
  export default {
    data() {
        return {
            magazineImages: [
                { story_number: 1, src: require("~/assets/images/otakuni_rikainoaru_kaisya/01.webp") },
                { story_number: 2, src: require("~/assets/images/otakuni_rikainoaru_kaisya/02.webp") },
                { story_number: 3, src: require("~/assets/images/otakuni_rikainoaru_kaisya/03.webp") },
                { story_number: 4, src: require("~/assets/images/otakuni_rikainoaru_kaisya/04.webp") },
            ]
        };
    },
}
</script>
