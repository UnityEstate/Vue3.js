import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
// import core from "core-js/library/web/timers";

//import "bootstrap/dist/css/bootstrap.css"; //bootstrap5 css
import "bootstrap/dist/js/bootstrap.bundle.js"; //bootstrap5 js(bootstrap+Popper.js)

//admin template
import "startbootstrap-sb-admin/dist/css/styles.css"; //รวม bootstrap5 มาแล้ว
import "startbootstrap-sb-admin/dist/js/scripts.js";
//pagination css
import "@hennge/vue3-pagination/dist/vue3-pagination.css";


createApp(App).use(store).use(router).mount("#app");
