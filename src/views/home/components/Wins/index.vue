<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from './componets/Card/index.vue';

// @ts-ignore
import 'swiper/css';

// Props
interface Win {
  id?: number | string;
  game_logo?: string;
  username_masked?: string;
  username?: string;
  main_amount?: number | string;
  amount?: number | string;
  money?: number | string;
  win?: number | string;
  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    initialWins?: Win[];
  }>(),
  {
    initialWins: () => [],
  }
);

const wins = ref<Win[]>(props.initialWins);

// Функція для отримання URL зображення гри
const getGameLogo = (win: Win): string => {
  return win.game_logo || '/telegram-app/assets/images/game/blackjack.svg';
};

// Функція для отримання замаскованого імені користувача
const getMaskedUsername = (win: Win): string => {
  return win.username_masked || win.username || 'Player';
};

// Функція для форматування суми виграшу
const formatMoney = (win: Win): string => {
  const amount = win.main_amount || win.amount || win.money || win.win || 0;
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  return `$${numAmount.toFixed(2)}`;
};

// Спостерігаємо за змінами в window.__DATA__.wins
const updateWins = () => {
  if ((window as any).__DATA__?.wins && Array.isArray((window as any).__DATA__.wins)) {
    wins.value = (window as any).__DATA__.wins;
  }
};

// Спостерігаємо за змінами props
watch(
  () => props.initialWins,
  (newWins) => {
    if (newWins && newWins.length > 0) {
      wins.value = newWins;
    }
  },
  { immediate: true, deep: true }
);

// Спостерігаємо за змінами в window.__DATA__.wins
onMounted(() => {
  // Оновлюємо дані при монтуванні
  updateWins();

  // Перевіряємо зміни в window.__DATA__.wins через polling
  const checkWins = () => {
    if ((window as any).__DATA__?.wins) {
      const currentWins = (window as any).__DATA__.wins;
      if (Array.isArray(currentWins)) {
        // Порівнюємо за довжиною та першим елементом для швидкості
        const hasChanged = 
          currentWins.length !== wins.value.length ||
          (currentWins.length > 0 && wins.value.length > 0 && 
           JSON.stringify(currentWins[0]) !== JSON.stringify(wins.value[0]));
        
        if (hasChanged) {
          wins.value = [...currentWins];
        }
      }
    }
  };

  // Перевіряємо зміни кожні 300мс (достатньо швидко для real-time оновлень)
  const interval = setInterval(checkWins, 300);

  // Очищаємо інтервал при демонтуванні
  return () => {
    clearInterval(interval);
  };
});
</script>

<template>
  <Container :class="styles.container" v-if="wins.length > 0">
    <div :class="styles.body">
      <h2
        :class="[styles.title, 'title-section']"
      >
        Live Wins
      </h2>

      <swiper
        :class="styles.slider"
        slides-per-view="auto"
        space-between="8"
        :grab-cursor="true"
      >
        <swiper-slide
          :class="styles.slide"
          v-for="(win, index) in wins"
          :key="win.id || index"
        >
          <Card
            :img="getGameLogo(win)"
            :money="formatMoney(win)"
            :player="getMaskedUsername(win)"
          />
        </swiper-slide>
      </swiper>
    </div>
  </Container>
</template>
