<template>
  <CustomContainer class="article">
    <template #content>
      <h1 class="article__title">{{ cardData.title }}</h1>

      <NuxtImg
        :src="cardData.image"
        :alt="cardData.title"
        class="article__image"
      />

      <div class="article-info">
        <span class="article-info__name"> About </span>

        <p class="article-info__text">{{ cardData.description }}</p>
      </div>
    </template>
  </CustomContainer>
</template>

<script setup lang="ts">
import { useRoute } from "#imports";
import CustomContainer from "@/ui/CustomContainer.vue";
import { onMounted, ref } from "vue";
import useCardsService from "@/modules/Cards/services/index";
import { type CardType } from "@/types/card";

const route = useRoute();
const { receiveCard } = useCardsService();
const cardData = ref<CardType>({} as CardType);

onMounted(async () => {
  try {
    const data = await receiveCard(route.params.id);
    cardData.value = data;
  } catch (e) {
    console.error(e);
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";

.article {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 120px 0 80px 0;
}

.article__title {
  @include text;
  font-size: 84px;
  letter-spacing: 0.04rem;
}

.article__image {
  display: flex;
  width: 100%;
  height: 700px;
  margin-top: 70px;
  object-fit: cover;
}

.article-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 58%;
}

.article-info__name {
  @include text;
  font-size: 1rem;
}

.article-info__text {
  @include text;
  font-size: 36px;
  line-height: 124%;
}
</style>
