<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Star from '@components/icons/Star.vue';
import Button from '@components/ui/Button/index.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Game from '@components/ui/Game/index.vue';

// @ts-ignore
import 'swiper/css';

import type { GameCardType } from '@types/game.type';

const feeds: GameCardType[][] = [
  [
    {
      title: 'rip',
      img: '/imgs/games/rip.png',
      maxWin: '5 000x',
      player: {
        name: 'Pl****',
        money: '$250.00',
      },
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
  ],

  [
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
  ],

  [
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
  ],
];
</script>

<template>
  <Container :class="styles.container">
    <div :class="styles.body">
      <div :class="styles.head">
        <h2 class="title-section">
          <Star class="title-icon" />
          Popular Slots
        </h2>

        <Button>View All</Button>
      </div>

      <div :class="styles.feeds">
        <swiper
          v-for="(feed, index) in feeds"
          :key="index"
          :class="styles.slider"
          :slides-per-view="3"
          space-between="12"
          :grab-cursor="true"
        >
          <swiper-slide
            :class="styles.slide"
            v-for="game in feed"
            :key="game.img"
          >
            <Game v-bind="game" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </Container>
</template>
