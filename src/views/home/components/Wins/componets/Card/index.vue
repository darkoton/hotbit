<script setup lang="ts">
import styles from './style.module.scss';

defineProps<{
  img: string;
  money: string;
  player: string;
}>();
</script>

<template>
  <div :class="styles.card">
    <img :class="styles.img" width="58" height="77" :src="img" alt="Game" />
    <div :class="styles.texts">
      <div :class="[styles.money, 'text-sub-body-bold']">{{ money }}</div>
      <div :class="[styles.player, 'text-notification']">{{ player }}</div>
    </div>
  </div>
</template>
