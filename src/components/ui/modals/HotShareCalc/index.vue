<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import Calculator from '@components/icons/Calculator.vue';
import ModalDown from '../ModalDown.vue';
('../ModalDown.vue');

import Field from '@components/ui/Field/index.vue';
import Select from '@components/ui/Select/index.vue';
import type { OptionType } from '@components/ui/Select/type';

import BTC from '@components/tokens/BTC.vue';
import BCH from '@components/tokens/BCH.vue';
import BNB from '@components/tokens/BNB.vue';
import DOGE from '@components/tokens/DOGE.vue';
import LTC from '@components/tokens/LTC.vue';
import USDT from '@components/tokens/USDT.vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const levelOptions = ref<OptionType[]>([
  {
    label: '1 Level',
    value: '1',
  },
  {
    label: '2 Level',
    value: '2',
  },
  {
    label: '3 Level',
    value: '3',
  },
  {
    label: '4 Level',
    value: '4',
  },
]);
const levelValue = ref<OptionType | null>(null);

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
    label: 'DOGe Coin',
    value: 'doge',
    img: DOGE,
  },
]);
const coinValue = ref<OptionType | null>(coins.value[0] || null);
</script>

<template>
  <ModalDown :show :openButton @close="$emit('close')">
    <h3 :class="['title-section', styles.title]">
      <Calculator class="title-icon-yellow" />

      House Share Calculator
    </h3>

    <div :class="styles.fields">
      <Field label="Total locked supply" placeholder="777,777" type="number">
        <template #after>
          <span class="text-body text-accent">Hotbit Coins</span>
        </template>
      </Field>

      <Field label="Total supply" placeholder="777,77" type="number">
        <template #after>
          <span class="text-body text-accent">Hotbit Coins</span>
        </template>
      </Field>

      <Select
        placeholder="Select Your VIP Level"
        v-model="levelValue"
        :options="levelOptions"
        label="Your VIP level"
      />

      <Field border label="Avg. Montly Platform volume" placeholder="Volume" type="number" />
      <Select
        placeholder="Coin"
        v-model="coinValue"
        :options="coins"
        label="Select a coin for your rewards"
      />
    </div>

    <div :class="['text-body', styles.table]">
      <div :class="styles.row">
        <span>Total Stack</span>
        <span class="text-body-bold">79,410 $WAGE <span class="text-green">(+2,1%)</span></span>
      </div>

      <div :class="styles.row">
        <span>Estimated Rewards / 2 hours</span>
        <span :class="['text-body-bold', styles.tableValue]"> $0.68 <BTC /> </span>
      </div>

      <div :class="styles.row">
        <span>Estimated Monthly Rewards</span>
        <span :class="['text-body-bold', styles.tableValue]"> $245.24 <BTC /> </span>
      </div>

      <div :class="styles.row">
        <p :class="['text-sub-body text-grey-light', styles.tableNote]">
          These estimations have an average 2% house edge. The rewards are calculated based on the
          real edge from each player’s games.
        </p>
      </div>
    </div>
  </ModalDown>
</template>
