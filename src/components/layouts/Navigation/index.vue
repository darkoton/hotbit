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
        <router-link
          :class="styles.button"
          :to="urls.home"
        >
          <House />
        </router-link>

        <router-link
          :class="styles.button"
          :to="urls.quest"
        >
          <Cup />
        </router-link>

        <router-link
          :class="styles.button"
          :to="urls.game"
        >
          <Game />
        </router-link>

        <router-link
          :class="styles.button"
          :to="urls.rewards"
        >
          <Medal />
        </router-link>
      </div>
    </Container>
  </div>
</template>
