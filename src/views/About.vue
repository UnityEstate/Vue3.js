<template>
  <div class="about">
    <h1>เกี่ยวกับเรา</h1>
    <Logo />
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  name: "About",
  components: {
    Logo,
  },
};
</script>

<style scoped>
.about {
  color: red;
}
</style>
