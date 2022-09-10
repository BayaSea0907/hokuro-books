<template>
  <div class="card">
    <figure class="card-thumbnail">
      <nuxt-link class="card-thumbnail__link" :to="linkPath">
        <img class="card-thumbnail__image" :src="thumbnailUrl">
      </nuxt-link>
    </figure>
    <div class="card-content">
      <h3 class="card-content__title">
        <nuxt-link class="card-content__title-link" :to=linkPath>
          {{ title }}
        </nuxt-link>
      </h3>
      <p class="card-content__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      thumbnailUrl: String,
      title: String,
      description: String,
      linkPath: String,
    },
  };
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  margin-bottom: 14px;
  box-shadow: 5px 5px 5px $gray-1;
}

.card-thumbnail {
  display: inline-block;
  margin-right: 10px;
  border: solid $gray-3;
  width: 600px;
  height: auto;

  @include greater-than-ipad-mini-width {
    width: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-content {
  display: inline-block;

  &__title {
    font-size: $font-size-h3-sp;
    margin: 10px 0 10px 0;

    @include greater-than-ipad-mini-width {
      font-size: $font-size-h3;
    }
  }

  &__title-link {
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.08em;
    }
  }

  &__description {
    color: $gray-3;
    padding-left: 10px;
  }
}
</style>
