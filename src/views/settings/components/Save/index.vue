<script setup lang="ts">
import Container from '@components/layouts/Container.vue';
import Button from '@components/ui/Button/index.vue';
</script>

<template>
  <Container>
    <Button class="button">Save Change</Button>
  </Container>
</template>

<style scoped>
.button {
  width: 100%;
  min-height: 37px;
  text-align: center;
  justify-content: center;
  margin-bottom: 22px;
}
</style>
