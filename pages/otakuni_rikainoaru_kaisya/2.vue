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
                { story_number: 5, src: require("~/assets/images/otakuni_rikainoaru_kaisya/05.webp") },
                { story_number: 6, src: require("~/assets/images/otakuni_rikainoaru_kaisya/06.webp") },
                { story_number: 7, src: require("~/assets/images/otakuni_rikainoaru_kaisya/07.webp") },
                { story_number: 8, src: require("~/assets/images/otakuni_rikainoaru_kaisya/08.webp") },
                { story_number: "おまけ1", src: require("~/assets/images/otakuni_rikainoaru_kaisya/omake01.webp") },
            ]
        };
    },
}
</script>
