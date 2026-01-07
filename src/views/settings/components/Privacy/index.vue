<script setup lang="ts">
import styles from './style.module.scss';

import Container from '@components/layouts/Container.vue';
import Switch from '@components/ui/Switch/index.vue';

import Eye from '@components/icons/Eye.vue';
import EyeClose from '@components/icons/EyeClose.vue';
import Info from '@components/icons/Info.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <label :class="styles.switch">
        <span class="text-h3">Privacy</span>
        <Switch
          :icon-no-active="Eye"
          :icon-active="EyeClose"
        />
      </label>

      <div :class="styles.note">
        <span class="text-body">
          Incognito Mode
        </span>
        <Info />
      </div>
    </div>
  </Container>
</template>
