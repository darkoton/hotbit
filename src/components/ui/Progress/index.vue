<script setup lang="ts">
import styles from './style.module.scss';

const { value = 0 } = defineProps<{
  value?: number | string;
}>();
</script>

<template>
  <div :class="styles.progress">
    <div
      :style="{
        width: value + '%',
      }"
      :class="styles.bar"
    ></div>
  </div>
</template>
