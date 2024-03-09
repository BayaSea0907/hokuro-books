<script>
export default {
    head: {
        link: [{
            rel: 'canonical',
            href: 'https://hokuro-books.web.app/otakuni_rikainoaru_kaisya'
        }]
    }
}
</script>

<template>
  <div>
    <!-- TODO: パンくずリスト表示したい -->
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink> > <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink> -->

    <PageTitle
      title="オタクに理解のある会社"
    />

    <OtakuniRikainoaruKaisyaPageList/>
  </div>
</template>
