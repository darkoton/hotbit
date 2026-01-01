<script setup lang="ts">
import { ref } from 'vue';
import styles from './style.module.scss';
import { useClickOutside } from '@composables/useClickOutside';

import Search from '@components/icons/Search.vue';
import Refresh from '@components/icons/Refresh.vue';

const value = defineModel<string>();

const emit = defineEmits(['open', 'close', 'refresh']);

const search = ref(null);
const open = ref(false);

const handleOpen = () => {
  emit('open');
  open.value = true;
};

useClickOutside(search, () => {
  open.value = false;
  emit('close');
});
</script>

<template>
  <div ref="search" :class="[styles.search, open && styles.open]">
    <div :class="styles.field" @click="handleOpen">
      <button :class="styles.button">
        <Search />
      </button>
      <input
        :class="['text-body', styles.input]"
        placeholder="Search"
        type="text"
        v-model="value"
      />
    </div>

    <div :class="[styles.refreshBody, open && styles.visible]">
      <button @click="$emit('refresh')" :class="styles.refresh" :disabled="!value?.trim().length">
        <Refresh />
      </button>
    </div>
  </div>
</template>
