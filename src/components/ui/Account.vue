<script setup lang="ts">
import Avatar from '@components/ui/Avatar.vue';
import ArrowDown from '@components/icons/ArrowDown.vue';

const { progressValue = 0 } = defineProps<{
  avatar?: string
  progressValue?: number
}>()

</script>

<template>
  <button class="account">
    <div class="top">
      <Avatar :src="avatar" size="28px" />

      <ArrowDown class="arrow" />
    </div>

    <div class="progress">
      <div class="bar"></div>
    </div>
  </button>
</template>

<style lang='scss' scoped>
.account {
  display: flex;
  flex-direction: column;
  gap: 7px;
  background: transparent;
  position: relative;
}

.top {
  display: flex;
  gap: 8px;
}

.arrow {
  font-size: 24px;
  color: $accent;
}

.progress {
  border-radius: 2px;
  height: 5px;
  background-color: $bg;
}

.bar {
  width: calc(v-bind(progressValue) * 1%);
  height: 100%;
  border-radius: 2px;
  background-color: $accent;
  transition: all 0.3s ease 0s;
}
</style>