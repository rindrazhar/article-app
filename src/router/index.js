import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Categories from "../views/Categories.vue"
import Post from "../views/Post.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home" },
    component: Home
  },
  {
    path: "/categories",
    name: "Categories",
    meta: { title: "Categories" },
    component: Categories
  },
  {
    path: "/post/:id",
    name: "Post",
    meta: { title: "Detail Post" },
    component: Post
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.params.title ? to.params.title : to.meta.title;
  next();
});

export default router;
