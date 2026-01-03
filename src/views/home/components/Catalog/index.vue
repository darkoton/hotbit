<script setup lang="ts">
import { computed, ref } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Star from '@/components/icons/StarRun.vue';
import Search from '@components/ui/Search/index.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Game from '@components/ui/Game/index.vue';
import BetModal from '@components/ui/modals/Bet/index.vue';

// @ts-ignore
import 'swiper/css';

import type { GameCardType } from '@interfaces/game.type';

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
      title: 'rip 2',
      img: '/imgs/games/rip.png',
      maxWin: '5 000x',
    },
    {
      title: 'outsourced 2',
      img: '/imgs/games/outsourced.png',
      maxWin: '5 000x',
    },
    {
      title: 'gates of olympus 2',
      img: '/imgs/games/gates-of-olympus.png',
      maxWin: '5 000x',
    },
    {
      title: 'wanted 2',
      img: '/imgs/games/wanted.png',
      maxWin: '5 000x',
    },
  ],

  [
    {
      title: 'rip 3',
      img: '/imgs/games/rip.png',
      maxWin: '5 000x',
    },
    {
      title: 'outsourced 3',
      img: '/imgs/games/outsourced.png',
      maxWin: '5 000x',
    },
    {
      title: 'gates of olympus 3',
      img: '/imgs/games/gates-of-olympus.png',
      maxWin: '5 000x',
    },
    {
      title: 'wanted 3',
      img: '/imgs/games/wanted.png',
      maxWin: '5 000x',
    },
  ],
];

const searchOpen = ref<boolean>(false);
const searchText = ref<string>('');

const searchResult = computed(() => {
  if (!searchText.value.trim().length) {
    return null;
  }

  const result: GameCardType[] = [];

  feeds.forEach((feed) => {
    result.push(
      ...feed.filter((game) =>
        game.title.includes(searchText.value)
      )
    );
  });

  return result;
});

const betButton = ref<HTMLElement | null>(null);
const betOpen = ref<boolean>(false);

const openBet = () => {
  betOpen.value = true;
};

const closeBet = () => {
  betOpen.value = false;
};
</script>

<template>
  <Container :class="styles.container">
    <div :class="styles.body">
      <div :class="styles.head">
        <h2
          :class="[
            'title-section',
            styles.title,
            searchOpen && styles.hidden,
          ]"
        >
          <Star class="title-icon" />
          Catalog
        </h2>
        <Search
          @open="searchOpen = true"
          @close="searchOpen = false"
          @refresh="searchText = ''"
          v-model="searchText"
        />
      </div>

      <div
        :class="styles.feeds"
        v-if="searchResult === null"
      >
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
            :key="game.title"
            @click="openBet"
          >
            <Game v-bind="game" />
          </swiper-slide>
        </swiper>
      </div>

      <div :class="styles.searchResult" v-else>
        <span class="text-h3">
          {{
            searchResult.length > 0
              ? `Found - ${searchResult.length} game`
              : 'Nothing found'
          }}
        </span>

        <swiper
          v-if="searchResult.length > 0"
          :class="styles.slider"
          :slides-per-view="3"
          space-between="12"
          :grab-cursor="true"
        >
          <swiper-slide
            :class="styles.slide"
            v-for="game in searchResult"
            :key="game.title"
          >
            <Game v-bind="game" />
          </swiper-slide>
        </swiper>

        <div v-else :class="styles.recommends">
          <span
            :class="[
              'text-body-bold',
              styles.recommendsTitle,
            ]"
          >
            Recomended Game
          </span>

          <swiper
            :class="styles.slider"
            :slides-per-view="3"
            space-between="12"
            :grab-cursor="true"
          >
            <swiper-slide
              :class="styles.slide"
              v-for="game in feeds[1]"
              :key="game.title"
            >
              <Game v-bind="game" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </Container>

  <BetModal
    @close="closeBet"
    :show="betOpen"
    :open-button="betButton"
  />
</template>
