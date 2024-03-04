<script>
export default {
  head: {
    link: [{
      rel: 'canonical',
      href: 'https://hokuro-books.web.app/con_cafe'
    }]
  }
}
</script>

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
                { story_number: "", src: require("~/assets/images/con_cafe/01.webp") },
                { story_number: "", src: require("~/assets/images/con_cafe/02.webp") },
                { story_number: "", src: require("~/assets/images/con_cafe/03.webp") },
                { story_number: "", src: require("~/assets/images/con_cafe/04.webp") },
                // { story_number: "", src: require("~/assets/images/con_cafe/05.webp") },
            ]
        };
    },
}
</script>
