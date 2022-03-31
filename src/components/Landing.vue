<template>
  <section class="landing-section">
    <header class="landing-header">
      <h2>BTS ARMY BLOG</h2>
      <h4>Good Music| Good People | Self Love</h4>
    </header>
  </section>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
.landing-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url("https://i.postimg.cc/RVZJ0jJt/62d30fc0-81a2-4093-b5aa-182a94855233-386389bf.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.landing-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.85);
}
.landing-header h2 {
  font-size: 60px;
  font-weight: 700;
  color: #fff;
}
.landing-header h4 {
  color: #fff;
}
@media only screen and (max-width: 770px) {
  .landing-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    min-height: 50vh;
    background: #A28865
  }
  .landing-header h2 {
    font-size: 40px;
    font-weight: 700;
    color: #fff;
  }
  .landing-header h4 {
    color: #fff;
  }
}
</style>
