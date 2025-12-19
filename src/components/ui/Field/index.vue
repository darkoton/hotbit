<script setup lang="ts">
import styles from './style.module.scss';

defineProps<{
  label?: string;
  subLabel?: string;
  placeholder?: string;
  id?: string;
  optional?: boolean;
}>();

const value = defineModel<string>();
</script>

<template>
  <div :class="styles.field">
    <label
      :htmlfor="id"
      :class="[
        styles.label,
        optional && styles.optional,
      ]"
      v-if="label || subLabel"
    >
      <span v-if="label" class="text-h3">{{
        label
      }}</span>
      <span v-if="subLabel" class="text-body">
        ({{ subLabel }})</span
      >
    </label>
    <input
      :id="id"
      :class="[styles.input, 'text-body']"
      type="text"
      v-model="value"
      :placeholder="placeholder"
    />
  </div>
</template>
