<template>
  <MagazineImages
    page-title="サイコパス上司 8〜11話"
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
                { story_number: 8, src: require("~/assets/images/saikopasu_joshi/08.jpg") },
                { story_number: 9, src: require("~/assets/images/saikopasu_joshi/09.jpg") },
                { story_number: 10, src: require("~/assets/images/saikopasu_joshi/10.jpg") },
                { story_number: 11, src: require("~/assets/images/saikopasu_joshi/11.jpg") },
            ]
        };
    },
}
</script>
