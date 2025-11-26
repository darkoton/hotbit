<script setup lang="ts">
import { ref } from 'vue';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Container from '@components/layouts/Container.vue';
import bannerImg from './assets/banner.png';
import { Pagination } from 'swiper/modules';

// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

const pagination = ref(null);
const modules = [Pagination];

function renderPagination(swiper: any, current: number, total: number): string {
  let bullets = '';
  for (let i = 1; i <= total; i++) {
    bullets += `<span class="${styles.bullet} ${i === current ? styles.active : ''}"></span>`;
  }
  return bullets;
}
</script>

<template>
  <div :class="styles.banner">
    <Container>
      <div :class="styles.body">
        <swiper
          :modules="modules"
          :grab-cursor="true"
          :class="styles.slider"
          :slides-per-view="1"
          :space-between="32"
          :pagination="{
            el: pagination,
            type: 'custom',
            renderCustom: renderPagination,
            clickable: true,
          }"
        >
          <swiper-slide v-for="i in 3" :key="i">
            <img :class="styles.img" width="370" height="232" :src="bannerImg" alt="banner" />
          </swiper-slide>
        </swiper>

        <div :class="styles.pagination" ref="pagination"></div>
      </div>
    </Container>
  </div>
</template>
