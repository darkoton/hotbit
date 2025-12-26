<script setup lang="ts">
import styles from './style.module.scss';

import ModalView from '../ModalView.vue';
import Button from '@components/ui/Button/index.vue';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

defineEmits(['close']);
</script>

<template>
  <ModalView :show="show" :open-button="openButton">
    <div :class="styles.body">
      <span :class="[styles.title, 'text-h3']">Disable Bonus?</span>
      <p :class="[styles.desc, 'text-body']">
        If you turn off the bonus, your bonus balance will be deducted. This is a non-retrievable
        action
      </p>
      <div :class="styles.buttons">
        <Button :class="styles.button" variant="black-2" @click="$emit('close')">Cancel</Button>
        <Button :class="styles.button" variant="red" @click="$emit('close')">Confirm</Button>
      </div>
    </div>
  </ModalView>
</template>
