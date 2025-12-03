<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import Star from '@components/icons/Star.vue';
import ModalDown from '../ModalDown.vue';
('../ModalDown.vue');

import Game from '@components/ui/Game/index.vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <ModalDown
    :show
    :openButton
    @close="$emit('close')"
  >
    <h3 :class="['title-section', styles.title]">
      <Star class="title-icon" />

      Favorites
    </h3>

    <div :class="styles.cards">
      <Game
        v-for="i in 8"
        :key="i"
        title="Outsourced"
        img="/imgs/games/outsourced.png"
        maxWin="5 000x"
      />
    </div>
  </ModalDown>
</template>
