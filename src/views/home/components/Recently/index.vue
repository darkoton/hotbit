<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import New from '@components/icons/New.vue';
import Button from '@components/ui/Button/index.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Game from '@components/ui/Game/index.vue';

// @ts-ignore
import 'swiper/css';

import type { GameCardType } from '@types/game.type.ts';

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
</script>

<template>
  <Container :class="styles.container">
    <div :class="styles.body">
      <div :class="styles.head">
        <h2 class="title-section">
          <New class="title-icon" />
          Recently Added
        </h2>

        <Button>View All</Button>
      </div>

      <swiper
        :class="styles.slider"
        :slides-per-view="3"
        space-between="12"
        :grab-cursor="true"
      >
        <swiper-slide
          :class="styles.slide"
          v-for="game in games"
          :key="game.img"
        >
          <Game v-bind="game" />
        </swiper-slide>
      </swiper>
    </div>
  </Container>
</template>
