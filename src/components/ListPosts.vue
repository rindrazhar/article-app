<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <router-link
      :to="{ name: 'Post', params: { id: post.id, title: post.title } }"
      class="post-image"
    >
      <img :src="post.thumbnail" />
    </router-link>

    <div class="post-contents">
      <router-link
        :to="{ name: 'Post', params: { id: post.id, title: post.title } }"
        class="post-title"
      >
        <h1>{{ post.title }}</h1>
      </router-link>

      <p class="post-description">
        {{
          post.description.length > 255 // eslint-disable-next-line vue/no-parsing-error
            ? post.description.replace(/(<([^>]+)>)/gi, "").substr(0, 310) +
              "..." // eslint-disable-next-line vue/no-parsing-error
            : post.description.replace(/(<([^>]+)>)/gi, "")
        }}
      </p>

      <div class="post-vote-count">
        Vote: <strong>{{ post.vote }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: { type: Object, required: true },
  },
};
</script>

<style lang="scss">
.post {
  display: grid;
  grid-gap: 30px;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .post-image {
    width: 300px;

    img {
      width: 100%;
    }
  }

  .post-contents {
    @media all and (max-width: 960px) {
    }

    @media all and (max-width: 640px) {
    }

    @media all and (max-width: 480px) {
    }

    .post-title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .post-description {
      font-size: 12px;
      color: #777;
    }

    .post-vote-count {
      margin-top: 25px;
    }
  }
}
</style>
