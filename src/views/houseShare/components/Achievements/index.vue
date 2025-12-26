<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';

import Tabs from '@components/ui/Tabs/index.vue';
import type { Tab } from '@components/ui/Tabs/type.ts';

import Dollar from '@components/icons/Dollar.vue';
import Percent from '@components/icons/Percent.vue';

const tabsList = ref<Tab[]>([
  {
    name: '24h',
    value: '24h',
  },
  {
    name: '7 days',
    value: '7 days',
  },
  {
    name: '30 days',
    value: '30 days',
  },
]);

const tabActive = ref<string>(tabsList.value[0].value);
</script>

<template>
  <Container>
    <div :class="styles.body">
      <Tabs :tabs="tabsList" :value="tabActive" @select="(v: string) => (tabActive = v)" />

      <div :class="styles.widgets" v-if="tabActive === '24h'">
        <div :class="styles.widget">
          <span :class="styles.widgetIcon"><Dollar /></span>
          <span :class="[styles.widgetTitle, 'text-h3']">$2M–$10M</span>
          <span :class="[styles.widgetDesc, 'text-body text-grey-light']">Total Wager</span>
        </div>
        <div :class="styles.widget">
          <span :class="styles.widgetIcon"><Percent /></span>
          <span :class="[styles.widgetTitle, 'text-h3']">2.0%–2.1%</span>
          <span :class="[styles.widgetDesc, 'text-body text-grey-light']">Average House Edge</span>
        </div>
      </div>
      <div :class="styles.widgets" v-if="tabActive === '7 days'">
        <div :class="styles.widget">
          <span :class="styles.widgetIcon"><Dollar /></span>
          <span :class="[styles.widgetTitle, 'text-h3']">$6M–$10M</span>
          <span :class="[styles.widgetDesc, 'text-body text-grey-light']">Total Wager</span>
        </div>
        <div :class="styles.widget">
          <span :class="styles.widgetIcon"><Percent /></span>
          <span :class="[styles.widgetTitle, 'text-h3']">4.0%–2.1%</span>
          <span :class="[styles.widgetDesc, 'text-body text-grey-light']">Average House Edge</span>
        </div>
      </div>
      <div :class="styles.widgets" v-if="tabActive === '30 days'">
        <div :class="styles.widget">
          <span :class="styles.widgetIcon"><Dollar /></span>
          <span :class="[styles.widgetTitle, 'text-h3']">$12M–$100M</span>
          <span :class="[styles.widgetDesc, 'text-body text-grey-light']">Total Wager</span>
        </div>
        <div :class="styles.widget">
          <span :class="styles.widgetIcon"><Percent /></span>
          <span :class="[styles.widgetTitle, 'text-h3']">12.0%–2.1%</span>
          <span :class="[styles.widgetDesc, 'text-body text-grey-light']">Average House Edge</span>
        </div>
      </div>
    </div>
  </Container>
</template>
