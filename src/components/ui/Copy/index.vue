<script setup lang="ts">
import type { Component } from 'vue';
import styles from './style.module.scss';
import Copy from '@components/icons/Copy.vue';

defineProps<{
  label?: string;
  before?: string;
  text: string;
  icon?: Component;
}>();
</script>

<template>
  <div :class="styles.field">
    <span
      v-if="label"
      :class="[styles.label, 'text-body-bold']"
    >
      <component
        v-if="icon"
        :class="styles.icon"
        :is="icon"
      />

      {{ label }}
    </span>

    <div :class="styles.input">
      <span class="text-body">
        <span
          v-if="before"
          class="text-grey-light"
          >{{ before }}</span
        >

        {{ text }}
      </span>

      <Copy :class="styles.copyIcon" />
    </div>
  </div>
</template>
