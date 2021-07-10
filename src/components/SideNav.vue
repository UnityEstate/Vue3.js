<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">ข้อมูลหลัก</div>
          <router-link class="nav-link" to="/">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            หน้าหลัก
          </router-link>
          <router-link class="nav-link" :to="{ name: 'About' }">
            <div class="sb-nav-link-icon">
              <i class="fas fa-chart-area"></i>
            </div>
            เกี่ยวกับเรา
          </router-link>

          <div class="sb-sidenav-menu-heading">ข้อมูลหลัก</div>
          <router-link class="nav-link" to="/product">
            <div class="sb-nav-link-icon">
              <i class="fas fa-chart-area"></i>
            </div>
            สินค้า
          </router-link>
          
          <router-link class="nav-link" to="/category">
            <div class="sb-nav-link-icon">
              <i class="fas fa-table"></i>
            </div>
            ประเภทสินค้า
          </router-link>

        </div>
      </div>
      <div class="sb-sidenav-footer" v-if="store.state.profile">
        <div class="small">Logged in as:{{ store.state.profile?.name}}</div>
       Email: {{  store.state.profile?.name}}
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "SideNav",
  setup() {
    const store = useStore();

    return {
      store
    }
  }
};
</script>

<style></style>
