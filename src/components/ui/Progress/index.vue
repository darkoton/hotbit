<script setup lang="ts">
import styles from './style.module.scss';

const {
  value = 0,
  size = 5,
  variant = 'primary',
} = defineProps<{
  size?: number;
  value?: number | string;
  variant?: 'primary' | 'secondary';
}>();
</script>

<template>
  <div :class="[styles.progress, styles[variant]]" :style="{ height: size + 'px' }">
    <div
      :style="{
        width: value + '%',
      }"
      :class="styles.bar"
    ></div>
  </div>
</template>
