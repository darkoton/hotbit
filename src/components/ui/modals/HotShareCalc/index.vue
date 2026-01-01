<script setup lang="ts">
import { ref, markRaw } from 'vue';
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
    img: markRaw(BTC),
  },

  {
    label: 'BCH Coin',
    value: 'bch',
    img: markRaw(BCH),
  },

  {
    label: 'BNB Coin',
    value: 'bnb',
    img: markRaw(BNB),
  },

  {
    label: 'USDT Coin',
    value: 'usdt',
    img: markRaw(USDT),
  },

  {
    label: 'LTC Coin',
    value: 'ltc',
    img: markRaw(LTC),
  },

  {
    label: 'DOGe Coin',
    value: 'doge',
    img: markRaw(DOGE),
  },
]);
const coinValue = ref<OptionType | null>(coins.value[0]);
</script>

<template>
  <ModalDown :show :openButton @close="$emit('close')">
    <h3 :class="['title-section', styles.title]">
      <Calculator class="title-icon-yellow" />

      House Share Calculator
    </h3>

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
  </ModalDown>
</template>
