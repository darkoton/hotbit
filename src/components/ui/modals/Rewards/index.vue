<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import ModalDown from '../ModalDown.vue';

import MedalStar from '@components/icons/MedalStar.vue';
import Info from '@components/icons/Info.vue';
import StarRun from '@components/icons/StarRun.vue';
import Coin from '@components/icons/Coin.vue';
import Money from '@components/icons/Money.vue';
import People from '@components/icons/People.vue';

import Switch from '@components/ui/Switch/index.vue';
import Button from '@components/ui/Button/index.vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const switchValue = ref<boolean>(false);

const items = ref([
  {
    icon: StarRun,
    title: 'Rakeback',
    button: '$3.58',
    buttonDisable: false,
    description: null,
    subButton: null,
  },
  {
    icon: Coin,
    title: 'Hotbit Coins',
    button: '3.584',
    buttonDisable: false,
    description: null,
    subButton: null,
  },
  {
    icon: Money,
    title: 'Hot Share',
    button: '01:02:24',
    buttonDisable: true,
    description: 'Expected Next Claim: $1,32',
    subButton: 'See more',
  },
  {
    icon: People,
    title: 'Affiliates',
    button: '$0.00',
    buttonDisable: true,
    description: null,
    subButton: 'Refer a Friend',
  },
]);
</script>

<template>
  <ModalDown :show :openButton @close="$emit('close')">
    <div :class="styles.rewards">
      <div :class="styles.head">
        <div :class="styles.title">
          <h3 class="title-section">
            <div :class="styles.titleIconBody">
              <MedalStar :class="styles.titleIcon" />
            </div>
            Rewards
          </h3>
        </div>
      </div>

      <label :class="styles.bonus">
        <span class="text-h3">Bonus</span>
        <Switch v-model="switchValue" />
      </label>

      <ul :class="styles.list">
        <li :class="styles.item" v-for="item in items" :key="item.title">
          <div :class="styles.itemLeft">
            <span :class="styles.itemIcon">
              <component :is="item.icon" />
            </span>
            <div :class="styles.itemTexts">
              <span v-if="item.title" :class="[styles.itemTitle, 'text-h3']">
                {{ item.title }}
                <Info :class="[styles.itemInfoIcon, 'text-grey-light']" />
              </span>
              <span
                v-if="item.description"
                :class="[styles.itemDesc, 'text-sub-body-bold', 'text-yellow']"
              >
                {{ item.description }}
              </span>
            </div>
          </div>

          <div :class="styles.itemRight">
            <Button :class="styles.itemButton" :disabled="item.buttonDisable">{{
              item.button
            }}</Button>
            <button v-if="item.subButton" :class="styles.subButton">
              {{ item.subButton }}
            </button>
          </div>
        </li>
      </ul>

      <span :class="styles.total">Total Affiliates Payout: $128.44</span>
    </div>
  </ModalDown>
</template>
