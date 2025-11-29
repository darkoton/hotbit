<script setup lang="ts">
import { ref } from 'vue';
import Avatar from '@components/ui/Avatar.vue';
import ArrowDown from '@components/icons/ArrowDown.vue';
import Profile from '@components/ui/modals/Profile/index.vue';
import { useScrollLock } from '@composables/useLockScroll';

const { progressValue = 0 } = defineProps<{
  avatar?: string;
  progressValue?: number;
}>();

const profileOpen = ref<boolean>(false);
const profileButton = ref<HTMLElement | null>(
  null
);

const lockScroll = useScrollLock();

const openProfile = () => {
  profileOpen.value = true;
  lockScroll.value = true;
};

const closeProfile = () => {
  profileOpen.value = false;
  lockScroll.value = false;
};
</script>

<template>
  <button
    class="account"
    @click="openProfile"
    ref="profileButton"
  >
    <div class="top">
      <Avatar :src="avatar" size="28px" />

      <ArrowDown
        :class="[
          'arrow',
          profileOpen && 'rotate',
        ]"
      />
    </div>

    <div class="progress">
      <div class="bar"></div>
    </div>
  </button>

  <Profile
    @close="closeProfile"
    :show="profileOpen"
    :open-button="profileButton"
  />
</template>

<style lang="scss" scoped>
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
  transition: all 0.3s ease 0s;

  &.rotate {
    transform: scaleY(-1);
  }
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
