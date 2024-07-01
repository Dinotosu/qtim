<template>
  <main class="articles">
    <CustomContainer>
      <template #content>
        <h2 class="articles__title">Articles</h2>

        <div class="articles-wrapper">
          <transition>
            <div class="articles-cards">
              <CustomCard
                v-for="card in page"
                :key="card.id"
                :image="card.image"
                :slug="card.id"
                :title="card.title"
                class="articles-cards__item"
              />
            </div>
          </transition>

          <CustomPagination
            :currentPage="cardStore.currentPage"
            :totalPages="cardStore.totalPages"
            @previous="previousPage"
            @next="nextPage"
            @goToPage="goToPage"
            class="articles-pagination"
          />
        </div>
      </template>
    </CustomContainer>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import CustomContainer from "@/ui/CustomContainer.vue";
import CustomCard from "@/ui/CustomCard.vue";
import CustomPagination from "@/ui/CustomPagination.vue";
import { useCardStore } from "@/stores/CardsStore";
import useCardsService from "@/modules/Cards/services/index";
import { type CardType } from "@/types/card";

const { receiveCards } = useCardsService();
const cardStore = useCardStore();
const { setCurrentPage } = cardStore;
const page = ref<CardType[]>([]);

onMounted(async () => {
  try {
    const data = await receiveCards();
    cardStore.addCards(data);
    page.value = cardStore.currentPageCards;
  } catch (e) {
    console.error(e);
  }
});

watch(
  () => cardStore.currentPage,
  () => {
    page.value = cardStore.pages[cardStore.currentPage - 1];
  }
);

const previousPage = () => {
  if (cardStore.currentPage > 1) {
    setCurrentPage(cardStore.currentPage - 1);
  }
};

const nextPage = () => {
  if (cardStore.currentPage < cardStore.totalPages) {
    setCurrentPage(cardStore.currentPage + 1);
  }
};

const goToPage = (page: number) => {
  setCurrentPage(page);
};
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

.articles-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
  padding-bottom: 140px;
}

.articles__title {
  @include text;
  font-size: 84px;
  letter-spacing: 0.04rem;
  margin-top: 120px;
}

.pagination {
  text-align: center;
}

.articles-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 60px;
  grid-template-rows: repeat(2, 400px);
  column-gap: 32px;
}

.articles-cards__item {
  transition: 0.3s ease;
}

.articles-cards__item:hover {
  transform: translateY(-20px);
}
</style>
