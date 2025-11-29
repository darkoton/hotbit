<script setup lang="ts">
import styles from './style.module.scss';

defineProps<{
  disabled?: boolean;
}>();
</script>

<template>
  <div
    :class="['text-sub-body', styles.level]"
    :disabled="disabled"
  >
    <slot />
  </div>
</template>
