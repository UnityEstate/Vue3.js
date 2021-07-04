<template>
  <NavBar />
  <div id="layoutSidenav">
    <SideNav />
    <div id="layoutSidenav_content">
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SideNav from "../components/SideNav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "DashBoard",
  components: {
    NavBar,
    SideNav,
    Footer,
  },
};
</script>

<style></style>
