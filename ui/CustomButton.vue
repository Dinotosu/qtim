<template>
  <button :class="[color, 'button']">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type ButtonType = {
  text: string;
  color: "black";
};

defineProps<ButtonType>();
</script>

<style scoped lang="scss">
@import "/assets/styles/global.scss";

.button {
  border-radius: 64px;
  padding: 1rem 2rem;
  transition: color 0.3s;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1rem;
  transition: 0.3s ease;
}

.black {
  @include text;
  background: $extra-dark;
  color: $white;

  &:hover,
  &:active {
    filter: invert(1);
  }
}
</style>
