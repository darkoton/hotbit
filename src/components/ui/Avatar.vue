<script setup lang="ts">
const { size = '28px', incognito = false } =
  defineProps<{
    size?: string;
    src?: string;
    incognito?: boolean;
  }>();
</script>

<template>
  <div class="avatar">
    <img
      :src="
        incognito ? '/imgs/incognito.png' : src
      "
      alt="Avatar"
    />
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: calc(0.14 * v-bind(size));
  overflow: hidden;
  border: 1px solid
    v-bind(
      'incognito ? "transparent" : "var(--accent)"'
    );
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
