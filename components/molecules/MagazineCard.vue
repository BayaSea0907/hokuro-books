<template>
  <div class="card">
    <figure class="card-thumbnail">
      <nuxt-link class="card-thumbnail__link" :to="linkPath">
        <img class="card-thumbnail__image" :src="thumbnailUrl">
      </nuxt-link>
    </figure>
    <div class="card-content">
      <h2 class="card-content__title">
        <nuxt-link class="card-content__title-link" :to=linkPath>
          {{ title }}
        </nuxt-link>
      </h2>
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
