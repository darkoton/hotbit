<script setup lang="ts">
import styles from './style.module.scss';

import Container from '@components/layouts/Container.vue';
import Switch from '@components/ui/Switch/index.vue';
import Checkbox from '@components/ui/Checkbox/index.vue';

import ArrowRight from '@components/icons/ArrowRight.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <label :class="styles.switch">
        <span class="text-h3">Security</span>
        <Switch />
      </label>

      <div :class="styles.table">
        <div :class="[styles.row, styles.auth]">
          <span class="text-body">
            Two-Factor Authentication
          </span>

          <ArrowRight :class="styles.arrow" />
        </div>

        <div :class="styles.row">
          <span class="text-body">
            Email Verified
          </span>

          <Checkbox
            :size="15"
            variant="success"
            checked
          />
        </div>

        <div :class="styles.row">
          <span class="text-body">
            Mobile Verified
          </span>

          <Checkbox
            :size="15"
            variant="success"
            checked
          />
        </div>
      </div>
    </div>
  </Container>
</template>
