<script setup lang="ts">
import Logo from '@assets/imgs/logo.png'
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
    icon: BTC
  },
  {
    value: '$0',
    price: '$0',
    name: 'BNB',
    icon: BNB
  },
  {
    value: '$0',
    price: '$0',
    name: 'DOGE',
    icon: DOGE
  },
  {
    value: '$0',
    price: '$0',
    name: 'LTC',
    icon: LTC
  },
  {
    value: '$0',
    price: '$0',
    name: 'USDT',
    icon: USDT
  },
  {
    value: '$0',
    price: '$0',
    name: 'BCH',
    icon: BCH
  },
  {
    value: '$0',
    price: '$0',
    name: 'USDT',
    icon: USDT
  },
  {
    value: '$0',
    price: '$0',
    name: 'BCH',
    icon: BCH
  },
]

</script>

<template>
  <header class="header">
    <Container>
      <div class="body">
        <router-link class="logo" :to="urls.home">
          <img width="60" height="25" :src="Logo" alt="Logo" />
        </router-link>

        <BalanceSelect :value="35.32" :items="balances" />

        <Account avatar="/imgs/avatar.png" :progress-value="35" />

      </div>
    </Container>

  </header>
</template>

<style lang='scss' scoped>
.header {
  padding-bottom: 12px;
}

.body {
  padding: 16px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba($bg-secondary, 0.7);
}
</style>