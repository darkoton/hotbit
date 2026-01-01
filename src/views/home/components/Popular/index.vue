<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Crown from '@components/icons/Crown.vue';
import Button from '@components/ui/Button/index.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Game from '@components/ui/Game/index.vue';
import Favorites from '@components/ui/modals/Favorites/index.vue';
import { useScrollLock } from '@composables/useLockScroll';
import GameModal from '@components/ui/modals/Game/index.vue';

// @ts-ignore
import 'swiper/css';

import type { GameCardType } from '@interfaces/game.type';

const games: GameCardType[] = [
  {
    title: 'rip',
    img: '/imgs/games/rip.png',
    maxWin: '5 000x',
  },
  {
    title: 'outsourced',
    img: '/imgs/games/outsourced.png',
    maxWin: '5 000x',
  },
  {
    title: 'gates of olympus',
    img: '/imgs/games/gates-of-olympus.png',
    maxWin: '5 000x',
  },
  {
    title: 'wanted',
    img: '/imgs/games/wanted.png',
    maxWin: '5 000x',
  },
];

const lockScroll = useScrollLock();
const favoritesButton = ref<HTMLElement | null>(null);
const favoritesOpen = ref<boolean>(false);

const openFavorites = () => {
  favoritesOpen.value = true;
  lockScroll.value = true;
};

const closeFavorites = () => {
  favoritesOpen.value = false;
  lockScroll.value = false;
};

const gameButton = ref<HTMLElement | null>(null);
const gameOpen = ref<boolean>(false);

const openGame = () => {
  gameOpen.value = true;
  lockScroll.value = true;
};

const closeGame = () => {
  gameOpen.value = false;
  lockScroll.value = false;
};
</script>

<template>
  <Container :class="styles.container">
    <div :class="styles.body">
      <div :class="styles.head">
        <h2 class="title-section">
          <Crown class="title-icon" />
          Popular Slots
        </h2>

        <Button @click="openFavorites" ref="favoritesButton">View All</Button>
      </div>

      <swiper :class="styles.slider" :slides-per-view="3" space-between="12" :grab-cursor="true">
        <swiper-slide @click="openGame" :class="styles.slide" v-for="game in games" :key="game.img">
          <Game v-bind="game" />
        </swiper-slide>
      </swiper>
    </div>
  </Container>

  <Favorites @close="closeFavorites" :show="favoritesOpen" :open-button="favoritesButton" />

  <GameModal @close="closeGame" :show="gameOpen" :open-button="gameButton" />
</template>
