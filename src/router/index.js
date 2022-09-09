import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AlcoholicView from "../views/AlcoholicView.vue";
import UnalcoholicView from "../views/UnalcoholicView.vue";
import InfosView from "../views/InfosView.vue";
import AllRecettesView from "../views/AllRecettesView.vue";
import SearchView from "../views/SearchView.vue";
import AllLastView from "../views/AllLastView.vue";
import LoginView from "../views/LoginView.vue";
import SecureView from "../views/SecureView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/avec alcool",
    name: "alcoholic",
    component: AlcoholicView,
  },
  {
    path: "/sans alcool",
    name: "unalcoholic",
    component: UnalcoholicView,
  },
  {
    path: "/infos/:id",
    name: "infos",
    component: InfosView,
  },
  {
    path: "/recettes",
    name: "recette",
    component: AllRecettesView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/last",
    name: "last",
    component: AllLastView,
  },
  {
    path: "/",
    redirect: {
      name: "/",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/secure",
    name: "secure",
    component: SecureView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
