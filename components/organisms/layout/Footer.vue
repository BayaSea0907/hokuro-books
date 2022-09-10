<template>
  <footer class="footer">
    <ul class="footer-navigation">
      <li class="footer-navigation__item">
        <NuxtLink to="/contact">お問合せ</NuxtLink>
      </li>
      <li class="footer-navigation__item">
        <span class="footer_navigation__item--partition">|</span>
        <NuxtLink to="/privacy_policy">プライバシーポリシー</NuxtLink>
      </li>
      <li class="footer-navigation__item">
        <span class="footer_navigation__item--partition">|</span>
        <NuxtLink to="/terms_of_service">利用規約</NuxtLink>
      </li>
    </ul>

    <div class="footer-copyright">
      <p class="footer-copyright__text">©️ほくろ, ばや 2022</p>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
  .footer {
    width: 100%;
    border-top: solid $gray-1;
    padding-top: 30px;
    padding-bottom: 50px;

    @include greater-than-ipad-mini-width {
      padding-bottom: 20px;
    }
  }

  .footer-navigation {
    text-align:center;

    &__item {
      display: inline-block;
    }

    &__item--partition {
      margin: 0 3px 0 3px;
    }
  }

  .footer-copyright {
    text-align:center;
    margin-top: 5px;
    color: $gray-3;
  }
</style>
