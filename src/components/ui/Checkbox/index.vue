<script setup lang="ts">
import styles from './style.module.scss';

defineProps<{
  label?: string;
  size?: number;
  checked?: boolean;
  disabled?: boolean;
}>();

const value = defineModel<boolean>();
</script>

<template>
  <label :class="styles.checkbox">
    <input
      type="checkbox"
      :class="styles.input"
      :style="{
        '--size': (size || 20) + 'px',
      }"
      :checked="value || checked"
      :disabled="disabled"
      @change="value = ($event.target as HTMLInputElement).checked"
    />
    <span :class="styles.label">
      {{ label }}
    </span>
  </label>
</template>
