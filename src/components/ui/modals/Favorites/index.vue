<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import Container from '@components/layouts/Container.vue';
import Star from '@components/icons/Star.vue';

import Game from '@components/ui/Game/index.vue';
import { useClickOutside } from '@/composables/useClickOutside';

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
      <div :class="styles.modal" v-if="show">
        <Container
          ref="bodyModal"
          :class="styles.container"
        >
          <div
            :class="styles.visor"
            @click="$emit('close')"
          ></div>

          <h3
            :class="[
              'title-section',
              styles.title,
            ]"
          >
            <Star class="title-icon" />

            Favorites
          </h3>

          <div :class="styles.cards">
            <Game
              v-for="i in 8"
              :key="i"
              title="Outsourced"
              img="/imgs/games/outsourced.png"
              maxWin="5 000x"
            />
          </div>
        </Container>
      </div>
    </Transition>
  </Teleport>
</template>
