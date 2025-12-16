<script setup lang="ts">
import styles from './style.module.scss';
import { computed, ref } from 'vue';
import Container from '@components/layouts/Container.vue';
import Tabs from '@components/ui/Tabs/index.vue';

import Wallet from '@components/icons/EmptyWalletChange.vue';
import ArrowLeft from '@components/icons/ArrowLeft.vue';
import ArrowRight from '@components/icons/ArrowRight.vue';

const tabs = ref<
  {
    value: string;
    name: string;
  }[]
>([
  {
    value: 'deposits',
    name: 'Deposits',
  },
  {
    value: 'withdraw',
    name: 'Withdraw',
  },
  {
    value: 'betting',
    name: 'Betting ',
  },
  {
    value: 'bonuses',
    name: 'Bonuses ',
  },
]);
const selectedTab = ref<string>(
  tabs.value[0].value
);

const data = ref<
  Array<{
    id: string;
    amound: string;
    date: string;
    status: string;
  }>
>([
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Progress',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Done',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Fail',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Done',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Done',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Done',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Fail',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Fail',
  },
  {
    id: '1212',
    amound: '+$500.00',
    date: '21.07.2025',
    status: 'Done',
  },
]);

const selectTable = computed(() => {
  return data.value.map((el) => {
    return {
      ...el,
      id:
        el.id +
        tabs.value.findIndex(
          (tab) => tab.value == selectedTab.value
        ),
    };
  });
});
</script>

<template>
  <Container>
    <div :class="styles.body">
      <h2
        :class="['title-section', styles.title]"
      >
        <Wallet class="title-icon" />
        <span>Transactions</span>
      </h2>

      <Tabs
        :class="styles.tabs"
        :tabs="tabs"
        :value="selectedTab"
        @select="
          (value: string) => {
            selectedTab = value;
          }
        "
      />

      <div :class="styles.table">
        <div :class="styles.tableMain">
          <div
            :class="[
              styles.row,
              'text-body-bold',
            ]"
          >
            <span
              :class="[
                styles.data,
                styles.column,
                styles.id,
              ]"
            >
              ID
            </span>
            <span
              :class="[
                styles.data,
                styles.column,
                styles.amound,
              ]"
            >
              Amound
            </span>
            <span
              :class="[
                styles.data,
                styles.column,
                styles.date,
              ]"
            >
              Date
            </span>
            <span
              :class="[
                styles.data,
                styles.column,
                styles.status,
              ]"
            >
              Status
            </span>
          </div>

          <div
            :class="[styles.row, 'text-body']"
            v-for="(item, index) in selectTable"
            :key="index"
          >
            <span
              :class="[
                styles.data,
                styles.column,
                styles.id,
              ]"
            >
              {{ item.id }}
            </span>
            <span
              :class="[
                styles.data,
                styles.column,
                styles.amound,
              ]"
            >
              {{ item.amound }}
            </span>
            <span
              :class="[
                styles.data,
                styles.column,
                styles.date,
              ]"
            >
              {{ item.date }}
            </span>
            <span
              :class="[
                styles.data,
                styles[item.status.toLowerCase()],
                styles.column,
                styles.status,
              ]"
            >
              {{ item.status }}
            </span>
          </div>
        </div>

        <div :class="styles.pagination">
          <button :class="styles.nav" disabled>
            <ArrowLeft />
          </button>
          <button
            :class="[
              styles.pagButton,
              'text-body',
              styles.active,
            ]"
          >
            1
          </button>
          <button
            :class="[
              styles.pagButton,
              'text-body',
            ]"
          >
            2
          </button>
          <button
            :class="[
              styles.pagButton,
              'text-body',
            ]"
          >
            3
          </button>
          <button
            :class="[
              styles.pagButton,
              'text-body',
            ]"
          >
            4
          </button>
          <button
            :class="[
              styles.pagButton,
              'text-body',
            ]"
            disabled
          >
            ...
          </button>
          <button
            :class="[
              styles.pagButton,
              'text-body',
            ]"
          >
            14
          </button>
          <button :class="styles.nav">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  </Container>
</template>
