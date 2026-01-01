<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';

import Progress from '@components/ui/Progress/index.vue';
import Select from '@components/ui/Select/index.vue';
import type { OptionType } from '@components/ui/Select/type';

import Info from '@components/icons/Info.vue';

import BTC from '@components/tokens/BTC.vue';
import BCH from '@components/tokens/BCH.vue';
import BNB from '@components/tokens/BNB.vue';
import DOGE from '@components/tokens/DOGE.vue';
import LTC from '@components/tokens/LTC.vue';
import USDT from '@components/tokens/USDT.vue';

const coins = ref<OptionType[]>([
  {
    label: 'BTC Coin',
    value: 'btc',
    img: BTC,
  },

  {
    label: 'BCH Coin',
    value: 'bch',
    img: BCH,
  },

  {
    label: 'BNB Coin',
    value: 'bnb',
    img: BNB,
  },

  {
    label: 'USDT Coin',
    value: 'usdt',
    img: USDT,
  },

  {
    label: 'LTC Coin',
    value: 'ltc',
    img: LTC,
  },

  {
    label: 'DOGE Coin',
    value: 'doge',
    img: DOGE,
  },
]);
const coinValue = ref<OptionType | null>(coins.value[0] || null);
</script>

<template>
  <Container>
    <div :class="styles.body">
      <Select :options="coins" v-model="coinValue" label="Claim Rewards in a preferred currency" />

      <div :class="styles.progress">
        <span :class="styles.progressTitle">
          <span class="text-body">
            Your Share
            <span class="text-body-bold text-accent">(16%)</span>
          </span>
          <Info class="text-grey-light" />
        </span>

        <Progress variant="secondary" :value="10" :class="styles.progressBar" :size="12" />
      </div>
    </div>
  </Container>
</template>
