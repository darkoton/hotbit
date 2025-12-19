<script setup lang="ts">
import { ref, markRaw, Transition } from 'vue';
import styles from './style.module.scss';
import ModalDown from '../ModalDown.vue';
import Tabs from '@components/ui/Tabs/index.vue';
import type { Tab } from '@/components/ui/Tabs/type';

import Select from '@components/ui/Select/index.vue';
import { OptionType } from '@components/ui/Select/type';

import Copy from '@components/ui/Copy/index.vue';
import Button from '@components/ui/Button/index.vue';

import Wallet from '@components/icons/Wallet.vue';
import Cards from '@components/icons/Cards.vue';

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

const tabs = ref<Tab[]>([
  {
    name: 'Detosit',
    value: 'detosit',
  },
  {
    name: 'Withdraw',
    value: 'withdraw',
  },
]);

const tabActive = ref<string>(
  tabs.value[0].value
);

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
const coinValue = ref<OptionType | null>(
  coins.value[0]
);

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
const networkValue = ref<OptionType | null>(
  networks.value[0]
);

const openQrCode = ref<boolean>(false);
</script>

<template>
  <ModalDown
    :show
    :openButton
    @close="$emit('close')"
  >
    <div :class="styles.wallet">
      <div :class="styles.head">
        <div :class="styles.title">
          <h3 class="title-section">
            <div :class="styles.titleIconBody">
              <Wallet :class="styles.titleIcon" />
            </div>
            Gates of Olympus
          </h3>
        </div>
      </div>

      <Tabs
        :class="styles.tabs"
        :tabs
        :value="tabActive"
        @select="(v) => (tabActive = v)"
      />

      <div v-if="tabActive === 'detosit'">
        <div :class="styles.selects">
          <Select
            :options="coins"
            v-model="coinValue"
            label="Network"
          />

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
            <div
              v-if="openQrCode"
              :class="styles.qrCode"
            >
              <img
                src="/imgs/qr-code.png"
                alt="QR Code"
              />
            </div>
          </Transition>

          <Button
            @click="openQrCode = !openQrCode"
            :class="styles.openQr"
            variant="black"
            >{{
              openQrCode ? 'Close' : 'Open'
            }}
            QR Code</Button
          >
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
</style>
