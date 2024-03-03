<template>
  <section class="profile">
    <div class="profile-header">
      <h3 class="profile-header__title">プロフィール</h3>
      <img class="profile-header__icon" src="~/assets/images/profile_icon.webp">
      <h4 class="profile-header__nickname">ほくろ</h4>
    </div>

    <div class="profile-description">
      <p>「ほくろ」という名前で活動しています。</p>
      <p>主にエッセイ漫画を描いています。</p>
      <p>お仕事のご相談などは
        <NuxtLink to="/contact">お問合せ</NuxtLink>
        からご連絡ください。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .profile {
    text-align: center;
    padding: 30px 10px 50px 10px;
  }

  .profile-header {
    &__icon {
      max-width: 30%;
      min-width: 20%;
      border-radius: 200px;
    }
  }

  .profile-description {
    a {
      text-decoration: underline;
    }
  }
</style>
