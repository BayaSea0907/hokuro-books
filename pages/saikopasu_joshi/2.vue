<template>
  <MagazineImages
    page-title="サイコパス上司 4〜7話"
    :image-list="magazineImages"
  >
    <template v-slot:pagelist>
      <SaikopasuJoshiPageList />
    </template>
  </MagazineImages>
</template>

<script>
  export default {
    data() {
        return {
            magazineImages: [
                { story_number: "4・5", src: require("~/assets/images/saikopasu_joshi/04_05.webp") },
                { story_number: 6, src: require("~/assets/images/saikopasu_joshi/06.webp") },
                { story_number: 7, src: require("~/assets/images/saikopasu_joshi/07_1.webp") },
                { story_number: "", src: require("~/assets/images/saikopasu_joshi/07_2.webp") },
            ]
        };
    },
}
</script>
