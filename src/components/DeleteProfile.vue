<template>
  <div class="success-wrapper">
    <div class="success-container">
      <header class="success-header">
        <h4>You have deleted your profile!</h4>
      </header>
      <article class="success-content">
        <p>
          Thank you for blogging with BTS ARMY BLOG! You have successfully deleted your account.
        </p>
      </article>
    </div>
  </div>
  <footer class="blog-footer">
    <div class="footer-copyright">
      <h6 class="copyright">Copyright © 2022 BTS ARMY BLOG</h6>
    </div>
  </footer>
</template>
<script>
export default {
  name: "DeleteProfile",
};
</script>

<style scoped>
.success-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
}
.success-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
}
p {
  text-align: center;
}
.blog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.95);
  bottom: 0;
  margin: 0;
  width: 100%;
}
.footer-copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
}
.copyright {
  color: #fff;
  font-size: 12px;
  margin: 0;
}
@media only screen and (max-width: 770px) {
  .form-header h2 {
    font-size: 35px;
    font-weight: 700;
  }
  .success-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
  .success-container {
    width: 95%;
  }
}
</style>
