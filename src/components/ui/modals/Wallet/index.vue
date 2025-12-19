<script setup lang="ts">
import styles from './style.module.scss';
import ModalDown from '../ModalDown.vue';
// import Button from '@components/ui/Button/index.vue';
import Tabs from '@components/ui/Tabs/index.vue';
import type { Tab } from '@components/ui/Tabs/tabs.type';

import Wallet from '@components/icons/Wallet.vue';
import { ref } from 'process';

// import { ref } from 'vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const tabs = ref<Tab[]>;
</script>

<template>
  <ModalDown
    :show
    :openButton
    @close="$emit('close')"
  >
    <div :class="styles.game">
      <div :class="styles.head">
        <div :class="styles.title">
          <Wallet :class="styles.titleIcon" />

          <h3 class="title-section">
            Gates of Olympus
          </h3>
        </div>
      </div>

      <Tabs />
    </div>
  </ModalDown>
</template>
