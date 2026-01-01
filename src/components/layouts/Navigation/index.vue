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
        <button :class="styles.button" :to="urls.home">
          <House />
        </button>

        <button :class="styles.button" :to="urls.quest">
          <Cup />
        </button>

        <button :class="styles.button" :to="urls.game">
          <Game />
        </button>

        <button :class="styles.button" :to="urls.rewards">
          <Medal />
        </button>
      </div>
    </Container>
  </div>
</template>
