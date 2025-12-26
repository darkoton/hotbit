<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';

import ArrowRight from '@components/icons/ArrowRight.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <h2 class="title-section">Minig Difficulty</h2>

      <div :class="[styles.tag, 'text-body-bold text-grey-light']">
        Current: <span class="text-accent">$0.01 Wager</span> / 1 Hotbit Coin
      </div>

      <div :class="[styles.tags, 'text-body text-grey-light']">
        <span :class="styles.subtag">
          <ArrowRight class="text-accent" />
          Remaining:
          <span class="text-white">777,777</span>
        </span>
        |
        <span :class="styles.subtag">
          <ArrowRight class="text-accent" />
          Wager required:
          <span class="text-accent">$7,77</span>
        </span>
      </div>

      <div :class="[styles.tag, 'text-body text-grey-light']">
        Next Level: <span class="text-accent">$0.25 Wager</span> / 1 Hotbit Coin
      </div>
    </div>
  </Container>
</template>
