<template>
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getProfile"); //->store->index.js->getProfile

    });
  }
  
}
</script>
