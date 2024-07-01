import { type CardType } from "@/types/card";

export default function useCardsService() {
  const { $api } = useNuxtApp();

  const receiveCards = async (): Promise<CardType[]> => {
    const res = await $api.cardApi.receiveCards();
    return res.data;
  };

  const receiveCard = async (id: number): Promise<any> => {
    const res = await $api.cardApi.receiveCard(id);
    return res.data;
  };

  return {
    receiveCards,
    receiveCard
  };
}