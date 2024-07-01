<template>
  <div class="pagination">
    <button v-if="currentPage !== 1" @click="previous" class="page-prev">
      <NuxtImg src="/arrow.svg" alt="next page" />
    </button>
    <div v-for="page in displayedPages" :key="page" class="page-number">
      <button :class="{ active: page === currentPage }" @click="goToPage(page)">
        {{ page }}
      </button>
    </div>
    <button v-if="currentPage !== totalPages" @click="next" class="page-next">
      <NuxtImg src="/arrow.svg" alt="next page" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useCardStore } from "@/stores/CardsStore";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const { setCurrentPage, ...cardStore } = useCardStore();

const emit = defineEmits<{
  (e: "previous"): void;
  (e: "next"): void;
  (e: "goToPage", page: number): void;
}>();

const previous = () => {
  emit("previous");
};

const next = () => {
  emit("next");
};

const goToPage = (page: number) => {
  emit("goToPage", page);
};

const displayedPages = computed(() => {
  const rangeSize = 5;
  const startPage = Math.max(1, props.currentPage - Math.floor(rangeSize / 2));
  const endPage = Math.min(props.totalPages, startPage + rangeSize - 1);

  if (endPage - startPage < rangeSize - 1) {
    const newStartPage = Math.max(1, endPage - rangeSize + 1);
    return Array.from(
      { length: endPage - newStartPage + 1 },
      (_, i) => newStartPage + i
    );
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.page-number button {
  width: 44px;
  height: 44px;
  border: none;
  background: $grey;
  border-radius: 12px;
  cursor: pointer;
}

.page-next,
.page-prev {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 44px;
  height: 44px;
  border: 1px solid $grey;
  background: none;

  img {
    width: 5px;
    height: 10px;
    object-fit: cover;
  }
}

.page-prev img {
  transform: rotate(180deg);
}

.page-number button.active {
  background-color: #000;
  color: #fff;
}

.page-number button:hover {
  outline: 2px solid $pink;
}
</style>
