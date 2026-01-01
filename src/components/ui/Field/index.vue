<script setup lang="ts">
import type { Component } from 'vue';
import styles from './style.module.scss';

defineProps<{
  label?: string;
  subLabel?: string;
  placeholder?: string;
  id?: string;
  optional?: boolean;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel';
  variant?: 'default' | 'amount';
  coin?: Component;
  note?: string;
  error?: boolean;
  after?: string | Component;
  border?: boolean;
}>();

const value = defineModel<string>();
</script>

<template>
  <label :class="styles.field">
    <span :class="[styles.label, optional && styles.optional]" v-if="label || subLabel">
      <span v-if="label" class="text-h3">{{ label }}</span>
      <span v-if="subLabel" class="text-body"> ({{ subLabel }})</span>
    </span>
    <div :class="[styles.input, error && styles.error, border && styles.border]">
      <slot name="before" />

      <template v-if="variant === 'amount' && coin">
        <component :class="styles.coin" :is="coin" />
      </template>

      <input class="text-body" v-model="value" :type="type || 'text'" :placeholder="placeholder" />

      <template v-if="variant === 'amount'">
        <div :class="styles.amount">
          <button :class="[styles.amountButton, 'text-sub-body']">25%</button>
          <button :class="[styles.amountButton, 'text-sub-body']">50%</button>
          <button :class="[styles.amountButton, 'text-sub-body']">75%</button>
          <button :class="[styles.amountButton, 'text-sub-body']">MAX</button>
        </div>
      </template>

      <slot name="after" />
    </div>

    <span :class="['text-sub-body', styles.note, error && styles.error]" v-if="note">{{
      note
    }}</span>
  </label>
</template>
