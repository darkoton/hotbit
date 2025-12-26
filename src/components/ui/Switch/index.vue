<script setup lang="ts">
import styles from './style.module.scss';

const { size = 24 } = defineProps<{
  size?: number;
}>();

const value = defineModel<boolean>();
</script>

<template>
  <label
    :class="[styles.switch, value && styles.active]"
    :style="{
      '--size': size + 'px',
    }"
  >
    <input hidden type="checkbox" v-model="value" />
    <div :class="[styles.indicator, value && styles.active]"></div>
  </label>
</template>
