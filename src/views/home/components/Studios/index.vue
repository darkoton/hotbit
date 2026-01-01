<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Buildings from '@components/icons/Buildings.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

// Props
interface Studio {
  id?: number | string;
  src?: string;
  image?: string;
  img?: string;
  image_url?: string;
  alt?: string;
  name?: string;
  title?: string;
  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    initialStudios?: Studio[];
  }>(),
  {
    initialStudios: () => [],
  }
);

const studios = ref<Studio[]>(props.initialStudios);
const pagination = ref(null);
const modules = [Pagination];

// Функція для отримання URL зображення студії
const getStudioImage = (studio: Studio): string => {
  return studio.src || studio.image || studio.img || studio.image_url || '';
};

// Функція для отримання alt тексту
const getStudioAlt = (studio: Studio, index: number): string => {
  return studio.alt || studio.name || studio.title || `Studio ${index + 1}`;
};

// Оновлення даних з window.__DATA__.studios
const updateStudios = () => {
  if ((window as any).__DATA__?.studios && Array.isArray((window as any).__DATA__.studios)) {
    studios.value = (window as any).__DATA__.studios;
  }
};

// Спостерігаємо за змінами props
watch(
  () => props.initialStudios,
  (newStudios) => {
    if (newStudios && newStudios.length > 0) {
      studios.value = newStudios;
    }
  },
  { immediate: true, deep: true }
);

// Спостерігаємо за змінами в window.__DATA__.studios
onMounted(() => {
  // Оновлюємо дані при монтуванні
  updateStudios();

  // Перевіряємо зміни в window.__DATA__.studios через polling
  const checkStudios = () => {
    if ((window as any).__DATA__?.studios) {
      const currentStudios = (window as any).__DATA__.studios;
      if (Array.isArray(currentStudios)) {
        // Порівнюємо за довжиною та першим елементом для швидкості
        const hasChanged = 
          currentStudios.length !== studios.value.length ||
          (currentStudios.length > 0 && studios.value.length > 0 && 
           JSON.stringify(currentStudios[0]) !== JSON.stringify(studios.value[0]));
        
        if (hasChanged) {
          studios.value = [...currentStudios];
        }
      }
    }
  };

  // Перевіряємо зміни кожні 500мс
  const interval = setInterval(checkStudios, 500);

  // Очищаємо інтервал при демонтуванні
  return () => {
    clearInterval(interval);
  };
});

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
        v-if="studios.length > 0"
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
          v-for="(studio, index) in studios"
          :key="studio.id || index"
        >
          <div :class="styles.card">
            <img
              :class="styles.img"
              :src="getStudioImage(studio)"
              :alt="getStudioAlt(studio, index)"
            />
          </div>
        </swiper-slide>
      </swiper>

      <div
        v-if="studios.length > 3"
        :class="styles.pagination"
        ref="pagination"
      ></div>
    </div>
  </Container>
</template>
