<script setup lang="ts">
import styles from './style.module.scss';

import type { Tab } from '@/components/ui/Tabs/type';
defineProps<{
  value: string;
  tabs: Tab[];
}>();

defineEmits(['select']);
</script>

<template>
  <div :class="styles.tabs">
    <button
      @click="$emit('select', tab.value)"
      :class="[
        'text-body-bold',
        styles.tab,
        tab.value === value && styles.active,
      ]"
      v-for="tab in tabs"
      :key="tab.value"
    >
      {{ tab.name }}
    </button>
  </div>
</template>
