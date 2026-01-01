<script setup lang="ts">
import styles from './style.module.scss';

const { variant = 'primary' } = defineProps<{
  variant?:
    | 'primary'
    | 'secondary'
    | 'black'
    | 'black-2'
    | 'red';
}>();

defineEmits(['click']);
</script>

<template>
  <button
    @click="$emit('click')"
    :class="[
      styles.button,
      'text-body-bold',
      styles[variant],
    ]"
  >
    <slot />
  </button>
</template>
