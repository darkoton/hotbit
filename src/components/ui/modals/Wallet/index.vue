<script setup lang="ts">
import { ref, Transition, type Component } from 'vue';
import styles from './style.module.scss';
import ModalDown from '../ModalDown.vue';

import Tabs from '@components/ui/Tabs/index.vue';
import type { Tab } from '@/components/ui/Tabs/type';

import Select from '@components/ui/Select/index.vue';
import type { OptionType } from '@components/ui/Select/type';

import Copy from '@components/ui/Copy/index.vue';
import Button from '@components/ui/Button/index.vue';
import Field from '@components/ui/Field/index.vue';
import Checkbox from '@components/ui/Checkbox/index.vue';

import Wallet from '@components/icons/Wallet.vue';
import WalletOutlined from '@components/icons/WalletOutlined.vue';
import Cards from '@components/icons/Cards.vue';

import BTC from '@components/tokens/BTC.vue';
import BCH from '@components/tokens/BCH.vue';
import BNB from '@components/tokens/BNB.vue';
import DOGE from '@components/tokens/DOGE.vue';
import LTC from '@components/tokens/LTC.vue';
import USDT from '@components/tokens/USDT.vue';

import ArrowDown from '@components/icons/ArrowDown.vue';
import Warning from '@components/icons/Warning.vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const tabs = ref<Tab[]>([
  {
    name: 'Deposit',
    value: 'deposit',
  },
  {
    name: 'Withdraw',
    value: 'withdraw',
  },
]);

const tabActive = ref<string | null>(tabs.value[0]?.value || null);

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

const networks = ref<OptionType[]>([
  {
    label: 'Polygon (POL)',
    value: 'pol',
  },

  {
    label: 'Etherium (ETH)',
    value: 'eth',
  },
  {
    label: 'TON',
    value: 'ton',
  },
]);
const networkValue = ref<OptionType | null>(networks.value[0] || null);

const openQrCode = ref<boolean>(false);

const depositCheckbox = ref<boolean>(false);
const depositInfoOpen = ref<boolean>(false);
</script>

<template>
  <ModalDown :show :openButton @close="$emit('close')">
    <div :class="styles.wallet">
      <div :class="styles.head">
        <div :class="styles.title">
          <h3 class="title-section">
            <div :class="styles.titleIconBody">
              <WalletOutlined :class="styles.titleIcon" />
            </div>
            Gates of Olympus
          </h3>
        </div>
      </div>

      <Tabs :class="styles.tabs" :tabs :value="tabActive" @select="(v) => (tabActive = v)" />

      <div v-if="tabActive === 'deposit'">
        <div :class="styles.selects">
          <Select :options="coins" v-model="coinValue" label="Network" />

          <Select
            :options="networks"
            v-model="networkValue"
            label="Currency"
            note="Make sure you select right network!"
          />
        </div>

        <div :class="styles.adress">
          <Copy
            :icon="Cards"
            label="Your deposit address"
            before="Adress:"
            text="04329579247209823475da932f"
          />

          <Transition name="slide-qr">
            <div v-if="openQrCode" :class="styles.qrCode">
              <img src="/imgs/qr-code.png" alt="QR Code" />
            </div>
          </Transition>

          <Button @click="openQrCode = !openQrCode" :class="styles.openQr" variant="black"
            >{{ openQrCode ? 'Close' : 'Open' }} QR Code</Button
          >
        </div>

        <Field
          id="promo"
          :class="styles.promo"
          label="Promo code"
          :optional="true"
          subLabel="if applicable"
          placeholder="Enter your promo code here"
        />

        <div :class="styles.deposit">
          <label :class="styles.depositCheckbox">
            <Checkbox :size="30" v-model="depositCheckbox" />
            <div :class="styles.depositLabel">
              <span class="text-body-bold"> Deposit Bonus </span>
              <span class="text-body text-grey-light"> 100% bonus up to $200 </span>
            </div>
          </label>

          <div :class="styles.depositTags">
            <span :class="styles.depositTag">
              <Checkbox checked :size="13" disabled />

              <span class="text-body">No wager</span>
            </span>

            <span :class="styles.depositTag">
              <Checkbox checked :size="13" disabled />

              <span class="text-body">Instant Cashout</span>
            </span>

            <span :class="styles.depositTag">
              <Checkbox checked :size="13" disabled />

              <span class="text-body">No KYC</span>
            </span>
          </div>

          <button @click="depositInfoOpen = !depositInfoOpen" :class="styles.depositMoreInfo">
            More Info <ArrowDown :class="[depositInfoOpen && styles.active]" />
          </button>

          <Transition name="slide-deposit">
            <div v-if="depositInfoOpen" :class="styles.depositInfo">
              <h3 class="text-h3">
                We make your time at
                <span class="text-accent"> Hotbit </span>
                Special!
              </h3>

              <ul :class="styles.depositInfoList">
                <li :class="[styles.depositInfoItem, 'text-body']">
                  100% bonus from first $50-$200
                </li>
                <li :class="[styles.depositInfoItem, 'text-body']">
                  No wagering requirement - only minimum play of $1
                </li>
                <li :class="[styles.depositInfoItem, 'text-body']">
                  Instant cashout. Only the bonus is deducted
                </li>
                <li :class="[styles.depositInfoItem, 'text-body']">
                  Multiaccount abuse will not be tolerated
                </li>
              </ul>

              <Button
                variant="primary"
                :disabled="!depositCheckbox"
                :class="styles.depositInfoButton"
                >Take the Bonus!</Button
              >
            </div>
          </Transition>
        </div>
      </div>

      <div v-if="tabActive === 'withdraw'" :class="styles.withdraw">
        <div :class="styles.form">
          <Select :options="coins" v-model="coinValue" label="Network" />

          <Select
            :options="networks"
            v-model="networkValue"
            label="Currency"
            note="Make sure you select right network!"
          />

          <Field
            :class="styles.field"
            label="Wallet address"
            placeholder="Enter your wallet address"
          />

          <Field
            :coin="coinValue?.img as Component"
            :class="styles.field"
            label="Amount"
            placeholder="00.00"
            variant="amount"
            type="number"
            :error="true"
            note="Minimum playable deposit for this network is $20"
          />

          <div :class="styles.withdrawSubmit">
            <Button variant="primary" :class="styles.withdrawButton">Withdraw </Button>
            <span :class="[styles.withdrawNote, 'text-body']">
              <Warning />
              This transaction will be processed in Polygon</span
            >
          </div>
        </div>

        <div :class="styles.balance">
          <h4 :class="[styles.balanceTitle, 'text-h3']">
            <WalletOutlined />
            Your Balance
          </h4>

          <div :class="styles.balanceRows">
            <div :class="styles.balanceRow">
              <span class="text-body">Live</span>
              <span :class="[styles.balanceValue, 'text-body-bold']">$0.68 <BTC /></span>
            </div>

            <div :class="styles.balanceRow">
              <span class="text-body">Bonus</span>
              <span :class="[styles.balanceValue, 'text-body-bold']">$0.68 <BTC /></span>
            </div>

            <div :class="styles.balanceRow">
              <span class="text-body">Withdrawable Amount</span>
              <span :class="[styles.balanceValue, 'text-body-bold']">$245.24 <BTC /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalDown>
</template>

<style lang="scss" scoped>
.slide-qr-enter-active {
  transition: all 0.3s ease;
}

.slide-qr-leave-active {
  transition: all 0.3s ease;
}

.slide-qr-enter-from,
.slide-qr-leave-to {
  max-height: 0px;
}

.slide-deposit-enter-active {
  transition: all 0.3s ease;
}

.slide-deposit-leave-active {
  transition: all 0.3s ease;
}

.slide-deposit-enter-from,
.slide-deposit-leave-to {
  max-height: 0px;
}
</style>
