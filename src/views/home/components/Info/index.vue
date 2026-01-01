<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Plus18 from '@components/icons/18Plus.vue';

// Props
interface Legal {
  id?: number;
  row1_text?: string;
  row1_links?: string;
  row2_support_email?: string;
  row2_bot_link?: string;
  row3_image?: string;
  row3_text?: string;
  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    initialLegal?: Legal;
  }>(),
  {
    initialLegal: () => ({}),
  }
);

const legal = ref<Legal>(props.initialLegal);

// Оновлення даних з window.__DATA__.legal
const updateLegal = () => {
  if ((window as any).__DATA__?.legal && typeof (window as any).__DATA__.legal === 'object') {
    legal.value = (window as any).__DATA__.legal;
  }
};

// Спостерігаємо за змінами props
watch(
  () => props.initialLegal,
  (newLegal) => {
    if (newLegal && Object.keys(newLegal).length > 0) {
      legal.value = newLegal;
    }
  },
  { immediate: true, deep: true }
);

// Спостерігаємо за змінами в window.__DATA__.legal
onMounted(() => {
  // Оновлюємо дані при монтуванні
  updateLegal();

  // Перевіряємо зміни в window.__DATA__.legal через polling
  const checkLegal = () => {
    if ((window as any).__DATA__?.legal) {
      const currentLegal = (window as any).__DATA__.legal;
      if (typeof currentLegal === 'object' && Object.keys(currentLegal).length > 0) {
        // Порівнюємо за ключовими полями
        const hasChanged = 
          JSON.stringify(currentLegal) !== JSON.stringify(legal.value);
        
        if (hasChanged) {
          legal.value = { ...currentLegal };
        }
      }
    }
  };

  // Перевіряємо зміни кожні 500мс
  const interval = setInterval(checkLegal, 500);

  // Очищаємо інтервал при демонтуванні
  return () => {
    clearInterval(interval);
  };
});

// Функції для отримання значень з fallback
const getRow1Text = computed(() => {
  return legal.value.row1_text || '18+ only';
});

const getRow1Links = computed(() => {
  return legal.value.row1_links || '';
});

const getRow2Email = computed(() => {
  return legal.value.row2_support_email || 'support@hotbit.gg';
});

const getRow2Bot = computed(() => {
  return legal.value.row2_bot_link || '@HotbitSupportBot';
});

const getRow3Image = computed(() => {
  return legal.value.row3_image || '';
});

const getRow3Text = computed(() => {
  return legal.value.row3_text || 'Responsible Gambling';
});
</script>

<template>
  <Container>
    <div :class="styles.body">
      <p :class="[styles.text, 'text-body-bold']">
        <template v-if="getRow1Text">{{ getRow1Text }}</template>
        <template v-else>18+ only | Play Responsibly | </template>
        <br />
        <template v-if="getRow1Links">
          <span v-html="getRow1Links"></span>
        </template>
        <template v-else>
          <button
            :class="[styles.link, styles.underline]"
            to="#"
          >
            Privacy Policy Terms & Conditions
          </button>
          v1.2.0
        </template>
      </p>

      <p :class="[styles.text, 'text-body-bold']">
        Support:
        <button :class="styles.link" :to="`mailto:${getRow2Email}`">
          {{ getRow2Email }}
        </button>
        <br />
        <button :class="styles.link" :to="`https://t.me/${getRow2Bot.replace('@', '')}`">
          {{ getRow2Bot }}
        </button>
      </p>

      <button
        :class="[
          'text-body-bold',
          styles.link,
          styles.underline,
          styles.gambling,
        ]"
        to="#"
      >
        <img v-if="getRow3Image" :src="getRow3Image" :alt="getRow3Text" :class="styles.iconImg" />
        <Plus18 v-else :class="styles.icon" />
        {{ getRow3Text }}
      </button>
    </div>
  </Container>
</template>
