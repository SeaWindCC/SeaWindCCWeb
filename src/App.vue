<template>
<navbar_vue :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar"/>
<sidebar_vue :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar"/>
<router-view />
</template>
<style scoped>

</style>
<script setup>
import { ref } from "vue";

import navbar_vue from "./components/navbar.vue";
import sidebar_vue from "./components/sidebar.vue"

const sidebarOpen = ref(false);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}

</script>