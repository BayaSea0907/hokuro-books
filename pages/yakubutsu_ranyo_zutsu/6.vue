<template>
  <MagazineImages
    :page-title="'21話(最終話)'"
    :image-list="magazineImages"
  />
</template>

<script>
  export default {
    data() {
        return {
            magazineImages: [
                { story_number: 21, src: require("~/assets/images/yakubutsu_ranyo_zutsu/21.jpg") },
            ]
        };
    },
}
</script>
