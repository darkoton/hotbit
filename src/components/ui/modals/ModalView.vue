<script setup lang="ts">
import { ref, watch } from 'vue';
import { useClickOutside } from '@composables/useClickOutside';
import { useScrollLock } from '@composables/useLockScroll';

const lockScroll = useScrollLock();

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const block = ref<HTMLElement | null>(null);

useClickOutside([block, openButton], () => {
  if (show) {
    emit('close');
  }
});

watch(
  () => show,
  (v) => {
    lockScroll.value = v;
  }
);
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal" v-if="show">
        <div class="modal-content" ref="block">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 110;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: auto;
}

.modal-content {
  display: inline-block;
  margin: auto;
  opacity: 1;
  max-height: 100%;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-content {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  transform: translateY(0);
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
