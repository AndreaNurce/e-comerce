import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Collection from "../views/Collection.vue";
import logIn from "@/components/logIn.vue";
import axios from "axios";

axios.defaults.withCredentials = true;
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: logIn,
  },
  {
    path: "/products/product/:name",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { needsAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.needsAuth)) {
    await axios
      .get("http://localhost:8081/isAuth")
      .then((isAuth) => {
        if (isAuth.data.isAdmin) {
          next();
        } else {
          next({ name: "Home" });
        }
      })
      .catch(() => {
        next({ name: "login" });
      });
  } else {
    next();
  }
});
export default router;
