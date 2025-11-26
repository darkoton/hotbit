<script setup lang="ts">
import styles from './style.module.scss';
import Cup from '@components/icons/Cup.vue';
import CrownStar from '@components/icons/CrownStar.vue';

import type { GameCardType } from '@interfaces/game.type';

defineProps<GameCardType>();

defineEmits(['click']);
</script>

<template>
  <div :class="styles.wrapper">
    <div :class="styles.player" v-if="player">
      <div :class="styles.left">
        <CrownStar :class="styles.crown" />
        <span :class="styles.name">{{
          player.name
        }}</span>
      </div>
      <span :class="styles.money">{{
        player.money
      }}</span>
    </div>

    <div
      :class="[styles.card, player && styles.win]"
    >
      <div :class="styles.img">
        <img :src="img" alt="Game" />
      </div>

      <div :class="styles.cups">
        <button
          :class="[styles.cup, styles.active]"
        >
          <Cup />
        </button>
        <button :class="styles.cup">
          <Cup />
        </button>
        <button :class="styles.cup">
          <Cup />
        </button>
      </div>

      <div
        :class="[styles.maxWin, 'text-sub-body']"
        v-if="maxWin"
      >
        MAXWIN:
        <span class="text-sub-body-bold">
          {{ maxWin }}</span
        >
      </div>
    </div>
  </div>
</template>
