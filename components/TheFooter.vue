<template>
  <footer class="footer">
    <CustomContainer>
      <template #content>
        <span class="footer-text">Is there a project?</span>

        <div class="footer-info">
          <h1 class="footer-info__title">
            <span class="big-text">Let’s work</span>
            <span class="big-text">together</span>
          </h1>

          <div class="footer-info-contacts">
            <div
              v-for="(item, index) of contacts"
              :key="index"
              class="footer-info-contacts-item"
            >
              <p class="footer-info-contacts-item__title">{{ item.title }}</p>

              <div class="footer-info-contacts-item-data">
                <p
                  v-for="(text, i) of item.data"
                  :key="i"
                  class="footer-info-contacts-item-data__text"
                >
                  {{ text }}
                </p>

                <NuxtLink
                  v-if="item.telegramLink"
                  :to="`tg:https://t.me/@${item.telegramLink}`"
                  target="_blank"
                  class="footer-info-contacts-item-data__link"
                >
                  <NuxtImg src="/tg-logo.svg" alt="telegram link" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-links">
            <NuxtLink
              v-for="(link, index) of linksLeft"
              :key="index"
              :to="link.link"
              target="_blank"
              class="footer-bottom-links__item"
            >
              {{ link.name }}
            </NuxtLink>
          </div>

          <NuxtLink to="#" class="footer-bottom-go">
            <span class="footer-bottom-go__text">Go</span>
            <div class="footer-bottom-go__bg"></div>
          </NuxtLink>

          <div class="footer-bottom-links">
            <NuxtLink
              v-for="(link, index) of linksRight"
              :key="index"
              :to="link.link"
              target="_blank"
              class="footer-bottom-links__item"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </template>
    </CustomContainer>
  </footer>
</template>

<script setup lang="ts">
import CustomContainer from "@/ui/CustomContainer.vue";

const contacts = [
  {
    title: "For all questions",
    data: ["+7 (920) 278—00—68", "qtim@agency.com"],
  },
  {
    title: "Office in Russia",
    data: ["139 Ruben Station Lake Drew, NM 52678"],
    telegramLink: "HITOSUDINO",
  },
  {
    title: "Office in Dubai",
    data: ["139 Ruben Station Lake Drew, NM 52678"],
    telegramLink: "HITOSUDINO",
  },
];

const linksLeft = [
  { name: "Facebook", link: "https://facebook.com" },
  { name: "Instagram", link: "https://instagram.com" },
  { name: "Telegram", link: "tg:https://t.me/@HITOSUDINO" },
];

const linksRight = [
  { name: "Behance", link: "https://behance.net" },
  { name: "Linkedn", link: "https://linkedn.com" },
  { name: "Privacy Policy", link: "#" },
];
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";

.footer {
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: $pink;
  padding: 140px 0 30px 0;
  overflow: hidden;
  cursor: default;
}

.footer-text {
  @include text;
  letter-spacing: 0.01em;
  color: $extra-dark;
}

.footer-info {
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
}

.footer-info__title {
  font-size: 112px;
  width: 464px;
}

.big-text {
  @include caption-bold;

  font-size: 112px;
  position: relative;
  display: inline-block;
  letter-spacing: -0.24rem;
  word-spacing: -0.8rem;

  :first-of-type {
    text-wrap: nowrap;
  }
}

.big-text::before,
.big-text::after {
  content: "";
  position: absolute;
  height: 1px;
  background-color: $extra-dark;
  width: 100%;
  left: 0;
}

.big-text:nth-of-type(2)::before {
  top: 100%;
  transform: translateY(-50%);
  width: 20%;
}

.big-text:nth-of-type(1)::before,
.big-text:nth-of-type(1)::after {
  bottom: 0px;
}

.big-text:nth-of-type(2)::after {
  bottom: 0px;
  width: 60%;
  left: 42%;
}

.footer-info-contacts {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 152px;
}

.footer-info-contacts-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  @include text;
  font-size: 1rem;
  line-height: 120%;
  letter-spacing: -0.04rem;
}

.footer-info-contacts-item-data {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-info-contacts-item-data__link {
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.footer-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin-top: 256px;
}

.footer-bottom-go {
  position: relative;
}

.footer-bottom-go__bg {
  display: flex;
  border-radius: 50%;
  background: $extra-dark;
  width: 358px;
  height: 358px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  bottom: -209px;
}

.footer-bottom-go__text {
  @include text;
  font-size: 32px;
  color: $white;
  position: relative;
  z-index: 2;
}

.footer-bottom-links {
  display: flex;
  gap: 32px;
}

.footer-bottom-links__item {
  @include text;
  font-size: 1rem;
  line-height: 120%;
  border-bottom: 1px solid $extra-dark;
  padding-bottom: 4px;
}
</style>
