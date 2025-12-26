<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';

import House from '@components/icons/House.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <h2 :class="['title-section', styles.title]">
        <House class="title-icon" />
        <span>Transactions</span>
      </h2>

      <p class="text-body">
        The House-Share System takes a generous percentage of each game’s house edge from every
        player’s bets and adds it to a shared reward pool. Your share of that pool depends on how
        many HotBit coins you hold compared to the total in the casino — and you can claim your
        rewards every two hours.
      </p>
    </div>
  </Container>
</template>
