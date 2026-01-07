<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';

import Container from '@components/layouts/Container.vue';
import Select from '@components/ui/Select/index.vue';
import type { OptionType } from '@components/ui/Select/type.ts';

const languagesOptions = ref<OptionType[]>([
  {
    label: 'English',
    value: 'US',
    img: '/imgs/flags/us.svg',
  },
  {
    label: 'Українська',
    value: 'UA',
    img: '/imgs/flags/ua.svg',
  },
  {
    label: 'Русский',
    value: 'RU',
    img: '/imgs/flags/ru.svg',
  },
]);
const languageValue = ref<OptionType | null>(
  languagesOptions.value[0] || null
);
</script>

<template>
  <Container>
    <div :class="styles.body">
      <span class="text-h3">Language</span>

      <Select
        v-model="languageValue"
        :options="languagesOptions"
        placeholder="Language"
        variant="secondary"
      />
    </div>
  </Container>
</template>
