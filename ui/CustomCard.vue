<template>
  <NuxtLink
    :to="`/card/${slug}`"
    class="card"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <NuxtImg :src="image" :alt="title" class="card__image" />

    <p class="card__text">{{ title }}</p>

    <transition>
      <span v-show="isHover" class="card__read-more">Read more</span>
    </transition>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps<{
  image: string;
  title: string;
  slug: string;
}>();

const isHover = ref<boolean>(false);
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;
}

.card__image {
  display: flex;
  width: 280px;
  height: 280px;
  object-fit: cover;
}

.card__text {
  @include text;
  color: $extra-dark;
  line-height: 120%;
}

.card__read-more {
  @include text;
  color: $pink;
}
</style>
