<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
a {
  margin: 0 10px;
}

.container {
  padding: 20px;
}
</style>
