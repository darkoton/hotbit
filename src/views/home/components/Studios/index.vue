<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Buildings from '@components/icons/Buildings.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { studios } from '@data/studios.data';

// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

const pagination = ref(null);
const modules = [Pagination];

function renderPagination(
  swiper: SwiperType,
  current: number,
  total: number
): string {
  let bullets = '';
  for (let i = 1; i <= total; i++) {
    bullets += `<span class="${styles.bullet} ${i === current ? styles.active : ''}"></span>`;
  }
  return bullets;
}
</script>

<template>
  <Container :class="styles.container">
    <div :class="styles.body">
      <div :class="styles.head">
        <h2 class="title-section">
          <Buildings class="title-icon" />
          Studios
        </h2>
      </div>

      <swiper
        :class="styles.slider"
        :slides-per-view="3"
        space-between="12"
        :grab-cursor="true"
        :modules="modules"
        :pagination="{
          el: pagination,
          type: 'custom',
          renderCustom: renderPagination,
          clickable: true,
        }"
      >
        <swiper-slide
          :class="styles.slide"
          v-for="studio in studios"
          :key="studio.alt"
        >
          <div :class="styles.card">
            <img
              :class="styles.img"
              v-bind="studio"
            />
          </div>
        </swiper-slide>
      </swiper>

      <div
        :class="styles.pagination"
        ref="pagination"
      ></div>
    </div>
  </Container>
</template>
