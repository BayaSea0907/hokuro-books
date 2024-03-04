<script>
export default {
    head: {
        link: [{
            rel: 'canonical',
            href: 'https://hokuro-books.web.app/privacy_policy'
        }]
    }
}
</script>

<template>
  <div>
    <PageTitle
      title="プライバシーポリシー"
    />

    <div class="privacy-policy">
      <!--
        下記のGoogle AdSenseヘルプの「サイトのプライバシーポリシーについて」の内容を記載している。
        https://support.google.com/adsense/answer/1348695?hl=ja
      -->
      <PlainContent
        title="1. Cookie (クッキー) の利用について"
      >
        当サイトでは第三者配信の広告サービス「Google AdSense」及び、<br>
        データ分析サービス「Google Analytics」の利用のためにCookieを活用しています。<br>
        活用内容は下記の通りです。<br>
        <br>
        ・ユーザーが過去にアクセスしたウェブサイトの情報をCookieを元に取得し、広告を配信いたします。<br>
        ・ユーザーが過去にアクセスしたウェブサイトの情報をCookieを元に取得し、アクセス解析などに活用いたします。<br>
        ・Googleやそのパートナーが適切な広告をユーザーに表示する際にCookieを活用します。<br>
        ・ユーザーはパーソナライズされた広告を<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">設定画面</a>より無効にできます。<br>
        ・ユーザーはブラウザの設定画面よりCookieを無効にできます。
      </PlainContent>

      <PlainContent
        title="2. 「Google AdSense」「Google Analytics」の活用について"
      >
        当サイトでは広告配信やデータ分析のために、ブラウザや端末の種類などの情報を活用いたします。<br>
        詳細な活用内容は、Googleの「<a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener">ポリシーと規約</a>」のページをご参照ください。
      </PlainContent>

      <PlainContent
        title="プライバシーポリシーの更新履歴"
      >
        2022年 9月 6日<br>
          ・「1. Cookie (クッキー) の利用について」を追加<br>
          ・「2. 「Google AdSense」「Google Analytics」の活用について」を追加<br>
      </PlainContent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .privacy-policy {
    padding-bottom: 20px;
  }
</style>
