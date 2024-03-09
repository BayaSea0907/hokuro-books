<script>
export default {
    head: {
        link: [{
            rel: 'canonical',
            href: 'https://hokuro-books.web.app'
        }]
    }
}
</script>

<template>
  <div>
    <PageTitle
      title="作品一覧"
    />

    <MagazineCard
      :thumbnail-url="require('~/assets/images/otakuni_rikainoaru_kaisya/thumbnail.webp')"
      title="オタクに理解のある会社(全8話)"
      description="オタクに理解のある会社と、愉快な仲間たちとの日常。"
      link-path="/otakuni_rikainoaru_kaisya"
    />
    <MagazineCard
      :thumbnail-url="require('~/assets/images/yakubutsu_ranyo_zutsu/thumbnail.webp')"
      title="薬物乱用頭痛になる社畜(全21話)"
      description="Twitterでバズったエッセイ漫画！
      仕事に疲れ果て、薬漬けの生活を繰り返した末路とは！？"
      link-path="/yakubutsu_ranyo_zutsu"
    />
    <MagazineCard
        :thumbnail-url="require('~/assets/images/saikopasu_joshi/thumbnail.webp')"
        title="サイコパス上司(全14話)"
        description="主人公ほくろと、サイコパスな上司の掛け合いにほっこりする日常系漫画！
                     冷静で合理的な判断をする上司さんの働きぶりをご堪能あれ！！"
        link-path="/saikopasu_joshi"
    />
    <MagazineCard
      :thumbnail-url="require('~/assets/images/con_cafe/thumbnail.webp')"
      title="女になったので、コンカフェ始めました"
      description="起きたら女になっていた、
      せっかくだしコンカフェ始めようぜ！！"
      link-path="/con_cafe"
    />
  </div>
</template>

