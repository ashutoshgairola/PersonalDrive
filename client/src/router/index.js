import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import User from "../components/User.vue";
import Upload from "../components/Upload.vue";
import Settings from "../components/Settings.vue";
import NotFound from "../components/NotFound.vue";
import About from "../components/productPage/About.vue";
import Pricing from "../components/productPage/Pricing.vue";
import Contact from "../components/productPage/Contact.vue";
import PersonalDrive from "../components/productPage/PersonalDrive.vue";

const routes = [
  {
    path: "/pd",
    name: "Pd",
    component: PersonalDrive,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/user/upload/",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/user/settings",
    name: "Settings",
    component: Settings,
  },
  { path: "/:notFound(.*)", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (
    to.path === "/login" ||
    to.path === "/pd" ||
    to.path === "/about" ||
    to.path === "/pricing" ||
    to.path === "/contact" ||
    to.path === "/signup"
  )
    next();
  if (!sessionStorage.getItem("isLoggedIn")) {
    next({ path: "/login" });
  } else {
    console.log("ok", sessionStorage.getItem("isLoggedIn"));
    next();
  }
});

export default router;
