<script setup lang="ts">
import { ref } from 'vue';
import Container from '@components/layouts/Container.vue';
// import { useClickOutside } from '@composables/useClickOutside';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const bodyModal = ref<HTMLElement | null>(null);
// useClickOutside([openButton, bodyModal], () => {
//   emit('close');
// });
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div class="modal" v-if="show">
        <Container
          ref="bodyModal"
          class="container"
        >
          <div
            class="visor"
            @click="$emit('close')"
          ></div>

          <div class="body">
            <slot />
          </div>
        </Container>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 60;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-end;
}

.container {
  padding: 0 16px 100px 16px !important;
  background-color: $bg;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px 24px 0 0;
  max-height: 95%;
  transform: translateY(0%);
}

.visor {
  width: 100%;
  padding: 24px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: '';
    width: 177px;
    height: 4px;
    border-radius: 24px;
    background-color: $grey-light;
  }
}

.body {
  flex: 1 1 auto;
  overflow: auto;
  @include scrollbars(
    0px,
    transparent,
    transparent,
    0px
  );
}

.slide-up-enter-from .container {
  transform: translateY(100%);
}

.slide-up-enter-active .container,
.slide-up-leave-active .container {
  transition: all 0.35s ease;
}

.slide-up-enter-to .container {
  transform: translateY(0%);
}

.slide-up-leave-to .container {
  transform: translateY(100%);
}
</style>
