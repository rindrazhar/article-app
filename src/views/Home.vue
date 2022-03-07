<template>
  <div id="posts">
    <div class="container">
      <div class="page-title">All Posts ({{ posts.length }})</div>
      <ListPosts :posts="posts" />
    </div>
  </div>
</template>

<script>
import ListPosts from "@/components/ListPosts.vue";
import { mapState } from "vuex";

export default {
  components: {
    ListPosts,
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style lang="scss">
#posts {
  margin-bottom: 50px;
}
</style>
