<script setup lang="ts">
import {
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue';
import Container from '@components/layouts/Container.vue';
import { useClickOutside } from '@composables/useClickOutside';

const { show, openButton } = defineProps<{
  show: boolean;
  openButton: HTMLElement | null;
}>();

const emit = defineEmits(['close']);

const bodyModal = ref<HTMLElement | null>(null);

const startY = ref(0);
const currentY = ref(0);
const isDragging = ref(false);

function startDrag(y: number) {
  startY.value = y;
  isDragging.value = true;
}

function moveDrag(y: number) {
  if (!isDragging.value) return;
  currentY.value = y;
}

function endDrag() {
  if (!isDragging.value) return;
  isDragging.value = false;

  const diff = currentY.value - startY.value;

  if (diff > 50) {
    emit('close');
    startY.value = 0;
    currentY.value = 0;
  }
}

// Touch events
function onTouchStart(e: TouchEvent) {
  startDrag(e.touches[0].clientY);
}

function onTouchMove(e: TouchEvent) {
  moveDrag(e.touches[0].clientY);
}

function onTouchEnd() {
  endDrag();
}

// Mouse events
function onMouseDown(e: MouseEvent) {
  startDrag(e.clientY);

  // Ловим движение мыши глобально, чтобы не слетало
  window.addEventListener(
    'mousemove',
    onMouseMove
  );
  window.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(e: MouseEvent) {
  moveDrag(e.clientY);
}

function onMouseUp() {
  endDrag();

  window.removeEventListener(
    'mousemove',
    onMouseMove
  );
  window.removeEventListener(
    'mouseup',
    onMouseUp
  );
}
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <Container
        ref="bodyModal"
        class="container"
        v-if="show"
      >
        <div
          class="visor"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          @mousedown="onMouseDown"
        ></div>

        <div class="body">
          <slot />
        </div>
      </Container>
    </Transition>

    <Transition name="fade">
      <div
        class="backward"
        v-if="show"
        @click="$emit('close')"
      ></div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 16px 100px 16px !important;
  background-color: $bg;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px 24px 0 0;
  max-height: 95%;
  transform: translateY(0%);
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 60;
  user-select: none;
  transform: translate(-50%, 0%);
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

.slide-up-enter-from {
  transform: translate(-50%, 100%);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.35s ease;
}

.slide-up-enter-to {
  transform: translate(-50%, 0%);
}

.slide-up-leave-to {
  transform: translate(-50%, 100%);
}

.backward {
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 50;
  top: 0;
  left: 0;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s ease;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
