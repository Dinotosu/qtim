<template>
  <div class="nuxt">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style>
body {
  display: initial;
  margin: 0;
}

.nuxt {
  min-height: 100vh;
  position: relative;
}
</style>
