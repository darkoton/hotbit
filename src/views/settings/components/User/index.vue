<script setup lang="ts">
import styles from './style.module.scss';

import Container from '@components/layouts/Container.vue';
import Avatar from '@components/ui/Avatar.vue';
import Level from '@components/ui/Level/index.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <Avatar
        size="49px"
        src="/imgs/avatar.png"
      />

      <div :class="styles.info">
        <span class="text-h3">LuckyKat777</span>
        <span
          :class="[styles.level, 'text-body']"
        >
          LuckyKat777
          <Level>3</Level>
        </span>
      </div>
    </div>
  </Container>
</template>
