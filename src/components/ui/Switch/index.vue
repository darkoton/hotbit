<script setup lang="ts">
import { type Component } from 'vue';
import styles from './style.module.scss';

const { size = 24 } = defineProps<{
  size?: number;
  iconNoActive?: Component;
  iconActive?: Component;
}>();

const value = defineModel<boolean>();
</script>

<template>
  <label
    :class="[
      styles.switch,
      value && styles.active,
    ]"
    :style="{
      '--size': size + 'px',
    }"
  >
    <input
      hidden
      type="checkbox"
      v-model="value"
    />
    <div
      :class="[
        styles.indicator,
        value && styles.active,
      ]"
    >
      <component
        v-if="iconActive || iconNoActive"
        :is="
          value && iconActive
            ? iconActive
            : !value && iconNoActive
              ? iconNoActive
              : null
        "
      ></component>
    </div>
  </label>
</template>
