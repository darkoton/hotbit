<script setup lang="ts">
import styles from './style.module.scss';
import Logo from '@assets/imgs/logo.png';
import { urls } from '@configs/router/urls';
import Container from '@components/layouts/Container.vue';
import BalanceSelect from '@components/ui/BalanceSelect.vue';
import Account from '@components/ui/Account.vue';

import BTC from '@/components/tokens/BTC.vue';
import BNB from '@/components/tokens/BNB.vue';
import DOGE from '@/components/tokens/DOGE.vue';
import LTC from '@/components/tokens/LTC.vue';
import USDT from '@/components/tokens/USDT.vue';
import BCH from '@/components/tokens/BCH.vue';

const balances = [
  {
    value: '$10,545.11',
    price: '$10,545.11',
    name: 'BTC',
    icon: BTC,
  },
  {
    value: '$0',
    price: '$0',
    name: 'BNB',
    icon: BNB,
  },
  {
    value: '$0',
    price: '$0',
    name: 'DOGE',
    icon: DOGE,
  },
  {
    value: '$0',
    price: '$0',
    name: 'LTC',
    icon: LTC,
  },
  {
    value: '$0',
    price: '$0',
    name: 'USDT',
    icon: USDT,
  },
  {
    value: '$0',
    price: '$0',
    name: 'BCH',
    icon: BCH,
  },
  {
    value: '$0',
    price: '$0',
    name: 'USDT',
    icon: USDT,
  },
  {
    value: '$0',
    price: '$0',
    name: 'BCH',
    icon: BCH,
  },
];
</script>

<template>
  <header :class="styles.header">
    <Container>
      <div :class="styles.body">
        <button :to="urls.home">
          <img
            width="60"
            height="25"
            :src="Logo"
            alt="Logo"
          />
        </button>

        <BalanceSelect
          :value="35.32"
          :items="balances"
        />

        <Account
          avatar="/imgs/avatar.png"
          :progress-value="35"
        />
      </div>
    </Container>
  </header>
</template>
