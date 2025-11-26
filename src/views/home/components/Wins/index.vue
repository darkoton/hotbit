<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from './componets/Card/index.vue';

// @ts-ignore
import 'swiper/css';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <h2 :class="[styles.title, 'title-section']">Live Wins</h2>

      <swiper :class="styles.slider" slides-per-view="auto" space-between="8" :grab-cursor="true">
        <swiper-slide :class="styles.slide" v-for="i in 8" :key="i">
          <Card img="/imgs/games/rip.png" money="$250.00" player="Pl*****23" />
        </swiper-slide>
      </swiper>
    </div>
  </Container>
</template>
