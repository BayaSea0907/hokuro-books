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
    </ul>
  </footer>
</template>


<style lang="scss" scoped>
  .footer {
    width: 100%;
    border-top: solid $gray-1;
    padding: 20px 0 20px 0;
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
</style>
