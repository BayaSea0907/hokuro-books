<template>
  <MagazineImages
    page-title="5〜8話"
    :image-list="magazineImages"
  />
</template>

<script>
  export default {
    data() {
        return {
            magazineImages: [
                { story_number: 5, src: require("~/assets/images/yakubutsu_ranyo_zutsu/05.jpg") },
                { story_number: 6, src: require("~/assets/images/yakubutsu_ranyo_zutsu/06.jpg") },
                { story_number: 7, src: require("~/assets/images/yakubutsu_ranyo_zutsu/07.jpg") },
                { story_number: 8, src: require("~/assets/images/yakubutsu_ranyo_zutsu/08.jpg") },
            ]
        };
    },
}
</script>
