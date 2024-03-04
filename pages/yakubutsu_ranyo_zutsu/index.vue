<script>
export default {
    head: {
        link: [{
            rel: 'canonical',
            href: 'https://hokuro-books.web.app/yakubutsu_ranyo_zutsu'
        }]
    }
}
</script>

<template>
  <div>
    <!-- TODO: パンくずリスト表示したい -->
    <!-- <NuxtLink to="/">🏠トップ</NuxtLink> > <NuxtLink to="/yakubutsu_ranyo_zutsu">薬物乱用頭痛</NuxtLink> -->

    <PageTitle
      title="薬物乱用頭痛になる社畜"
    />

    <YakubutsuRanyoZutsuPageList />
  </div>
</template>
