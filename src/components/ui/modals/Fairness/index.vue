<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import ModalDown from '../ModalDown.vue';

import SecuritySafe from '@components/icons/SecuritySafe.vue';
import Warning from '@components/icons/Warning.vue';

import Tabs from '@components/ui/Tabs/index.vue';
import type { Tab } from '@components/ui/Tabs/type.ts';
import Field from '@components/ui/Field/index.vue';
import Button from '@components/ui/Button/index.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
// @ts-ignore
import 'swiper/css';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const tabs = ref<Tab[]>([
  {
    name: 'Seeds',
    value: 'Seeds',
  },
  {
    name: 'Verify',
    value: 'Verify',
  },
]);
const tabActive = ref<string | null>(
  tabs.value[0]?.value || null
);
</script>

<template>
  <ModalDown
    :show
    :openButton
    @close="$emit('close')"
  >
    <h3 :class="['title-section', styles.title]">
      <SecuritySafe class="title-icon-yellow" />
      Fairness
    </h3>

    <Tabs
      :class="styles.tabs"
      :tabs="tabs"
      :value="tabActive"
      @select="(v) => (tabActive = v)"
    />

    <div
      :class="styles.block"
      v-if="tabActive === 'Seeds'"
    >
      <div :class="styles.fields">
        <Field label="Active Seed:" />
        <Field label="Activve Hash:" />
        <Button :class="styles.submit">
          Change</Button
        >
        <span :class="styles.note">
          <Warning />
          <span class="text-body">
            Hash not active
          </span>
        </span>
      </div>
    </div>

    <div
      :class="styles.block"
      v-else-if="tabActive === 'Verify'"
    >
      <div :class="styles.fields">
        <Field label="Select Game:" />
        <Field label="Active Seed:" />
        <Field label="Activve Hash:" />
        <Button :class="styles.submit">
          Change</Button
        >
        <span :class="styles.note">
          <Warning />
          <span class="text-body">
            Hash not active
          </span>
        </span>
      </div>

      <div :class="styles.game">
        <div :class="styles.hand">
          <span
            :class="[
              styles.handName,
              styles.handDealer,
              'text-body-bold',
            ]"
          >
            Dealer Hudn
            <span class="text-accent">
              (52 Card)
            </span>
          </span>

          <swiper
            :class="styles.slider"
            :slides-per-view="'auto'"
            space-between="8"
            :grab-cursor="true"
          >
            <swiper-slide
              :class="styles.slide"
              v-for="i in 8"
              :key="i"
            >
              <img
                :class="styles.card"
                src="/imgs/cards/q-s.png"
              />
            </swiper-slide>
          </swiper>
        </div>

        <div :class="styles.hand">
          <span
            :class="[
              styles.handName,
              'text-body-bold',
            ]"
          >
            Player Hudn
            <span class="text-accent">
              (52 Card)
            </span>
          </span>

          <swiper
            :class="styles.slider"
            :slides-per-view="'auto'"
            space-between="8"
            :grab-cursor="true"
          >
            <swiper-slide
              :class="styles.slide"
              v-for="i in 8"
              :key="i"
            >
              <img
                :class="styles.card"
                src="/imgs/cards/q-s.png"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </ModalDown>
</template>
