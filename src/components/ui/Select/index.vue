<script setup lang="ts">
import { useClickOutside } from '@composables/useClickOutside';
import styles from './style.module.scss';
import Warning from '@components/icons/Warning.vue';
import ArrowDown from '@components/icons/ArrowDown.vue';
import { Transition, ref } from 'vue';
import { OptionType } from './type';

const value = defineModel<OptionType | null>();

defineProps<{
  placeholder?: string;
  label?: string;
  options: OptionType[];
  note?: string;
}>();

const open = ref<boolean>(false);
const selectEl = ref<HTMLElement | null>(null);

useClickOutside(selectEl, () => {
  open.value = false;
});
</script>

<template>
  <div ref="selectEl" :class="styles.select">
    <label v-if="label" class="text-h3">{{
      label
    }}</label>

    <button
      :class="styles.button"
      @click="open = !open"
    >
      <div
        :class="[styles.value, 'text-body-bold']"
      >
        <template v-if="value">
          <img
            v-if="typeof value.img === 'string'"
            :src="value.img"
            alt="Image"
            :class="styles.img"
          />

          <component
            v-else-if="value.img"
            :is="value.img"
            :class="styles.img"
          />

          {{ value.label }}
        </template>
        <template v-else>
          {{ placeholder }}
        </template>
      </div>

      <ArrowDown
        :class="[
          styles.arrow,
          open && styles.open,
        ]"
      />
    </button>

    <Transition name="show-list">
      <ul :class="styles.list" v-show="open">
        <li v-for="option in options">
          <button
            @click="
              () => {
                value = option;
                open = false;
              }
            "
            :class="[
              styles.option,
              'text-body',
              value.value === option.value &&
                styles.active,
            ]"
          >
            <img
              v-if="
                typeof option.img === 'string'
              "
              :src="option.img"
              alt="Image"
              :class="styles.img"
            />
            <component
              v-else-if="option.img"
              :is="option.img"
              :class="styles.img"
            />
            {{ option.label }}
          </button>
        </li>
      </ul>
    </Transition>

    <span
      v-if="note"
      :class="[styles.note, 'text-body']"
    >
      <Warning :class="styles.noteIcon" />
      {{ note }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.show-list-enter-active {
  transition: all 0.3s ease 0s;
}

.show-list-leave-active {
  transition: all 0.3s ease 0s;
}

.show-list-enter-from,
.show-list-leave-to {
  opacity: 0;
}
</style>
