<script setup lang="ts">
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Crown from '@components/icons/Crown.vue';
</script>

<template>
  <Container>
    <div :class="styles.body">
      <h2 class="title-section">
        <Crown class="title-icon" />
        Popular Slots
      </h2>
    </div>
  </Container>
</template>
