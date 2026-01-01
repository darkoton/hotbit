<script setup lang="ts">
import { ref, computed } from 'vue';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Container from '@components/layouts/Container.vue';
import { Pagination } from 'swiper/modules';

// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

// Props
interface Banner {
  id?: number | string;
  image?: string;
  url?: string;
  title?: string;
  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    banners?: Banner[];
  }>(),
  {
    banners: () => [],
  }
);

const pagination = ref(null);
const modules = [Pagination];

// Фільтруємо банери, які мають зображення
const validBanners = computed(() => {
  return props.banners.filter(
    (banner) =>
      banner.image ||
      banner.img ||
      banner.image_url
  );
});

// Отримуємо URL зображення для банеру
const getBannerImage = (
  banner: Banner
): string => {
  return (
    banner.image ||
    banner.img ||
    banner.image_url ||
    ''
  );
};

// Отримуємо alt текст для зображення
const getBannerAlt = (
  banner: Banner,
  index: number
): string => {
  return (
    banner.title ||
    banner.alt ||
    `Banner ${index + 1}`
  );
};

// Обробка кліку на банер
const handleBannerClick = (banner: Banner) => {
  if (banner.url) {
    window.location.href = banner.url;
  }
};

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
  <Container v-if="validBanners.length > 0">
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
        <swiper-slide
          v-for="(banner, index) in validBanners"
          :key="banner.id || index"
        >
          <img
            :class="[
              styles.img,
              banner.url ? styles.clickable : '',
            ]"
            width="370"
            height="232"
            :src="getBannerImage(banner)"
            :alt="getBannerAlt(banner, index)"
            @click="handleBannerClick(banner)"
          />
        </swiper-slide>
      </swiper>

      <div
        :class="styles.pagination"
        ref="pagination"
        v-if="validBanners.length > 1"
      ></div>
    </div>
  </Container>
</template>
