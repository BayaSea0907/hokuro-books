<template>
  <div class="main">
    <div class="card">
      <img class="card__tag" src="">
      <img class="card__thumbnail" src="">
      <p class="card__title">薬物乱用頭痛になる社畜<span>(全1~10話)</span></p>
      <p class="card__description">お薬は用法容量を守って飲もうね☆</p>
      <time class="card__footer-description">2020/4/14</time>
    </div>

    <Sidebar />
  </div>
</template>

<style lang="scss">
  .main {
    display: block;

    @include greater-than-ipad-mini-width {
      display: flex;
    }
  }

  .card {
    display: inline-block;
    width: 100%;

    @include greater-than-ipad-mini-width {
      width: 70%;
    }
  }
</style>
