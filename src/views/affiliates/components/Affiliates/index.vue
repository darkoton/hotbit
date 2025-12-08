<script setup lang="ts">
import styles from './style.module.scss';
import { ref } from 'vue';
import Container from '@components/layouts/Container.vue';

import Tabs from '@components/ui/Tabs/index.vue';
import Button from '@components/ui/Button/index.vue';

import People from '@components/icons/People.vue';
import Copy from '@components/icons/Copy.vue';

const tabs = ref<
  {
    value: string;
    name: string;
  }[]
>([
  {
    value: 'this-month',
    name: 'This Month',
  },
  {
    value: 'last-month',
    name: 'Last Month',
  },
  {
    value: 'all-time',
    name: 'All Time',
  },
]);

const selectTab = ref<string>(
  tabs.value[0].value
);
</script>

<template>
  <Container>
    <div :class="styles.body">
      <h2
        :class="['title-section', styles.title]"
      >
        <People class="title-icon" />
        <span>Affiliates</span>
      </h2>

      <div :class="styles.link">
        <span class="text-body-bold">
          Your affiliate link
        </span>

        <div :class="styles.fieldCopy">
          <span class="text-body">
            t.me/hotbitbot/?start=Ansduf
          </span>

          <Copy :class="styles.fieldCopyIcon" />
        </div>

        <Tabs
          :tabs="tabs"
          @select="(v) => (selectTab = v)"
          :class="styles.tabs"
          :value="selectTab"
        />

        <ul
          v-if="selectTab === 'this-month'"
          :class="styles.info"
        >
          <li :class="styles.infoItem">
            <span class="text-body">
              Invited Users
            </span>
            <span class="text-body"> 24 </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body">
              Referrals Wagered
            </span>
            <span class="text-body">
              $577,56
            </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body">
              Your Commission
            </span>
            <span class="text-body"> $54 </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body-bold">
              Total Affiliates Payout
            </span>
            <span
              class="text-body-bold text-green"
            >
              $3,850,12
            </span>
          </li>
        </ul>

        <ul
          v-if="selectTab === 'last-month'"
          :class="styles.info"
        >
          <li :class="styles.infoItem">
            <span class="text-body">
              Invited Users2
            </span>
            <span class="text-body"> 24 </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body">
              Referrals Wagered2
            </span>
            <span class="text-body">
              $577,56
            </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body">
              Your Commission2
            </span>
            <span class="text-body"> $54 </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body-bold">
              Total Affiliates Payout2
            </span>
            <span
              class="text-body-bold text-green"
            >
              $3,850,12
            </span>
          </li>
        </ul>

        <ul
          v-if="selectTab === 'all-time'"
          :class="styles.info"
        >
          <li :class="styles.infoItem">
            <span class="text-body">
              Invited Users3
            </span>
            <span class="text-body"> 24 </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body">
              Referrals Wagered3
            </span>
            <span class="text-body">
              $577,56
            </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body">
              Your Commission3
            </span>
            <span class="text-body"> $54 </span>
          </li>

          <li :class="styles.infoItem">
            <span class="text-body-bold">
              Total Affiliates Payout3
            </span>
            <span
              class="text-body-bold text-green"
            >
              $3,850,12
            </span>
          </li>
        </ul>

        <div :class="styles.calculation">
          <div :class="styles.calculationStats">
            <span class="text-body"
              ><span
                class="text-body-bold text-accent"
                >Commission Rate:</span
              >
              25% of house edge.</span
            >

            <span class="text-body"
              ><span
                class="text-body-bold text-accent"
                >Payment Cycle:</span
              >
              Paid monthly in USDC.</span
            >
          </div>

          <Button
            variant="black-2"
            :class="styles.calculationButton"
            >See calculation</Button
          >

          <div :class="styles.calculationBottom">
            <p
              class="text-sub-body text-grey-light"
            >
              Each of our games comes with a
              unique house edge. To calculate your
              commission, you can use this
              formula:
            </p>
            <span
              :class="[
                'text-body',
                styles.calculationFormula,
              ]"
              >(Edge * Wagered / 2) * Commission
              Rate</span
            >
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
