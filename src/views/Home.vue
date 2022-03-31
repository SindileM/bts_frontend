<template>
  <section id="home-page">
    <Landing />
    <Posts />
    <Contact />
  </section>
</template>
<script>
import Posts from "./AllPosts.vue";
import Landing from "../components/Landing.vue";
import Contact from "./Contact.vue";

export default {
  name: "Home",
  components: {
    Posts,
    Landing,
    Contact,
  },
};
</script>

<style scoped></style>
