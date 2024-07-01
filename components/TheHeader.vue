<template>
  <header class="header">
    <NuxtLink to="/" class="header-logo">
      <NuxtImg src="/logo.svg" alt="qtim" />
    </NuxtLink>

    <div class="header-links">
      <NuxtLink
        v-for="(key, i) of routesKeys"
        :key="i"
        :to="routes[key].route"
        class="header-links__item"
      >
        {{ routes[key].name }}
      </NuxtLink>
    </div>

    <div class="header-locale">
      <NuxtImg src="/uk.svg" alt="lang" />
    </div>

    <CustomButton text="Let’s work" color="black" class="header-button" />
  </header>
</template>

<script setup lang="ts">
import { routes } from "@/constants/routes";
import CustomButton from "@/ui/CustomButton.vue";

const routesKeys = Object.keys(routes);
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 40px;
}

.header-logo {
  width: 84px;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.header-links {
  display: flex;
  gap: 58px;
  margin-left: auto;
}

.header-links__item {
  @include link;
}

.header-locale {
  display: flex;
  width: 52px;
  height: 52px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid $modal-background;
  padding: 12px;
  margin-left: 91px;
}

.header-button {
  margin-left: 16px;
}
</style>
