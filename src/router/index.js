import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Post from "../views/Post.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Signup from "../components/Signup.vue";
import UpdateProfile from "../components/UpdateProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/success",
    name: "success",
    component: Signup,
  },
  {
    path: "/profile/updated",
    name: "updated",
    component: UpdateProfile,
  },
  {
    path: "/profile/deleted",
    name: "deleted",
    component: DeleteProfile,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
