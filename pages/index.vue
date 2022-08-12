<template>
  <div>
    <!-- TODO: コンポーネント化する。タイトルやリンクなどをプロパティとして渡したい。 -->
    <div class="card">
      <figure class="card-thumbnail">
        <nuxt-link class="card-thumbnail__link" to="/yakubutsu_ranyo">
          <img class="card-thumbnail__image" src="~/assets/images/yakubutsu_ranyo/thumbnail.png">
        </nuxt-link>
      </figure>
      <div class="card-content">
        <h2 class="card-content__title">
          <nuxt-link class="card-content__title-link" to="/yakubutsu_ranyo">
            薬物乱用頭痛になる社畜(全21話)
          </nuxt-link>
        </h2>
        <p class="card-content__description">Twitterでバズったエッセイ漫画！<br>仕事で疲れ果て、薬漬けの生活を繰り返した末路とは！？</p>
      </div>
    </div>

    <div class="card">
      <figure class="card-thumbnail">
        <nuxt-link class="card-thumbnail__link" to="/yakubutsu_ranyo">
          <img class="card-thumbnail__image" src="~/assets/images/yakubutsu_ranyo/thumbnail.png">
        </nuxt-link>
      </figure>
      <div class="card-content">
        <h2 class="card-content__title">
          <nuxt-link class="card-content__title-link" to="/yakubutsu_ranyo">
            薬物乱用頭痛になる社畜(全21話)
          </nuxt-link>
        </h2>
        <p class="card-content__description">Twitterでバズったエッセイ漫画！<br>仕事で疲れ果て、薬漬けの生活を繰り返した末路とは！？</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 10px;
  margin-bottom: 14px;
  border: none;

  @include greater-than-ipad-mini-width {
    border: solid $gray-1;
  }
}

.card-thumbnail {
  display: inline-block;
  width: 200px;
  height: 130px;
  margin-right: 10px;

  img {
    min-width: 100%;
  }
}

.card-content {
  display: inline-block;

  &__title {
    margin: 10px 0 10px 0;
  }

  &__title-link {
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.08em;
    }
  }

  &__description {
    padding-left: 15px;
  }
}
</style>
