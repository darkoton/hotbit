<script setup lang="ts">

const { size = '28px' } = defineProps<{
  size?: string,
  src?: string
}>()

</script>

<template>
  <div class="avatar">
    <img :src="src" alt="Avatar">
  </div>
</template>

<style lang='scss' scoped>
.avatar {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid $accent;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>