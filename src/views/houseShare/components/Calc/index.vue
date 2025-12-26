<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';

import BTC from '@components/tokens/BTC.vue';

import Logo from '@components/icons/Logo.vue';

import Button from '@components/ui/Button/index.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <div :class="styles.table">
        <div :class="styles.row">
          <span class="text-body">Total Hotbit Coins Supply</span>
          <span class="text-body">777,777,777</span>
        </div>
        <div :class="styles.row">
          <span class="text-body">Total mined Hotbit Coins</span>
          <span class="text-body">
            777,777 <span class="text-accent text-body-bold">(0,1%)</span>
          </span>
        </div>
        <div :class="styles.row">
          <span class="text-body">Total pooled Coins</span>
          <span class="text-body">100%</span>
        </div>
        <div :class="styles.row">
          <span class="text-body">Difficulty Level</span>
          <span class="text-body">
            <span class="text-accent text-body-bold">$0.01</span> wager /
            <span class="text-accent text-body-bold">1</span> Hotbit Coin
          </span>
        </div>
        <div :class="styles.row">
          <span class="text-body">Your Poolweight</span>
          <span class="text-body">
            124,123 / 777,777
            <span class="text-accent text-body-bold">(16%)</span>
          </span>
        </div>
        <div :class="styles.row">
          <span class="text-body">VIP Pool Boost</span>
          <span :class="[styles.value, 'text-body text-green']">+2%</span>
        </div>
        <div :class="styles.row">
          <span class="text-body">Your Next Claim</span>
          <span :class="[styles.value, 'text-body text-green']">
            $2,42 <BTC :class="styles.coin" />
          </span>
        </div>
        <div :class="styles.row">
          <span class="text-body">Total Rewards Claimed</span>
          <span :class="[styles.value, 'text-body text-green']">$577,56</span>
        </div>
        <div :class="styles.row">
          <span class="text-body">Total Rewards Distributed</span>
          <span :class="[styles.value, 'text-body text-green']">$3,850,12</span>
        </div>
        <div :class="styles.buttons">
          <div :class="styles.buttonsTop">
            <Button :class="styles.button">2,432 <Logo /></Button>
            <Button :class="styles.button">2,432 <BTC /></Button>
          </div>

          <Button :class="styles.button" variant="black-2">Try the rewards calculator</Button>
        </div>
      </div>
    </div>
  </Container>
</template>
