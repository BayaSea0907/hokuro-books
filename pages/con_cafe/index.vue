<template>
  <MagazineImages
    page-title="女になったので、コンカフェ始めました"
    :image-list="magazineImages"
  />
</template>

<script>
  export default {
    data() {
        return {
            magazineImages: [
                { story_number: "", src: require("~/assets/images/con_cafe/01.jpg") },
                { story_number: "", src: require("~/assets/images/con_cafe/02.jpg") },
                { story_number: "", src: require("~/assets/images/con_cafe/03.jpg") },
                { story_number: "", src: require("~/assets/images/con_cafe/04.jpg") },
                // { story_number: "", src: require("~/assets/images/con_cafe/05.jpg") },
            ]
        };
    },
}
</script>
