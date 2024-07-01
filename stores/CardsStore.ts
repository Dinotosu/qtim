import { defineStore } from 'pinia';
import { type CardType } from '@/types/card';

export const useCardStore = defineStore('cards', {
  state: () => ({
    cards: [] as CardType[],
    currentPage: 1,
    cardsPerPage: 8,
    pages: [] as CardType[][],
  }),
  actions: {
    addCards(cards: CardType[]) {
      this.cards = cards;
      this.paginateCards();
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
    paginateCards() {
      const pages: CardType[][] = [];
      for (let i = 0; i < this.cards.length; i += this.cardsPerPage) {
        pages.push(this.cards.slice(i, i + this.cardsPerPage));
      }
      this.pages = pages;
    },
  },
  getters: {
    currentPageCards(): CardType[] {
      return this.pages[this.currentPage - 1] || [];
    },
    totalPages(): number {
      return this.pages.length;
    },
  },
});
