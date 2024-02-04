<template>
  <MagazineImages
    page-title="12~14話"
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
                { story_number: 12, src: require("~/assets/images/saikopasu_joshi/12.jpg") },
                { story_number: 13, src: require("~/assets/images/saikopasu_joshi/13.jpg") },
                { story_number: 14, src: require("~/assets/images/saikopasu_joshi/14.jpg") },
            ]
        };
    },
}
</script>
