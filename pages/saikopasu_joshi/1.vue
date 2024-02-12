<template>
  <MagazineImages
    page-title="サイコパス上司 1〜3話"
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
                { story_number: 1, src: require("~/assets/images/saikopasu_joshi/01.jpg") },
                { story_number: 2, src: require("~/assets/images/saikopasu_joshi/02.jpg") },
                { story_number: 3, src: require("~/assets/images/saikopasu_joshi/03.jpg") },
            ]
        };
    },
}
</script>
