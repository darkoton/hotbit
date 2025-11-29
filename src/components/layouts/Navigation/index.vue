<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import { urls } from '@configs/router/urls';

import House from '@components/icons/House.vue';
import Cup from '@components/icons/CupStar.vue';
import Game from '@components/icons/Game.vue';
import Medal from '@components/icons/MedalStar.vue';
</script>

<template>
  <div :class="styles.navigation">
    <Container>
      <div :class="styles.body">
        <a
          :class="styles.button"
          :href="urls.home"
        >
          <House />
        </a>

        <a
          :class="styles.button"
          :href="urls.quest"
        >
          <Cup />
        </a>

        <a
          :class="styles.button"
          :href="urls.game"
        >
          <Game />
        </a>

        <a
          :class="styles.button"
          :href="urls.rewards"
        >
          <Medal />
        </a>
      </div>
    </Container>
  </div>
</template>
