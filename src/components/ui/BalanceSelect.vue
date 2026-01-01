<script setup lang="ts">
import type { Component } from 'vue';
import { ref, computed } from 'vue';
import BTC from '@/components/tokens/BTC.vue';
import ArrowDown from '@components/icons/ArrowDown.vue';
import Wallet from '@components/icons/Wallet.vue';
import { useClickOutside } from '@/composables/useClickOutside';

type Item = {
  value: string;
  price: string;
  name: string;
  icon?: Component;
  iconUrl?: string;
};

const { value = 0, items = [] } = defineProps<{
  value?: number;
  items?: Item[];
}>();

defineEmits(['select']);

const balance = ref<null | HTMLElement>(null);
const open = ref(false);

// Отримуємо іконку першого токену
const selectedTokenIcon = computed(() => {
  if (items.length > 0) {
    const firstItem = items[0];
    if (firstItem && firstItem.icon) {
      return firstItem.icon;
    }
    if (firstItem && firstItem.iconUrl) {
      return firstItem.iconUrl;
    }
  }
  return BTC;
});

// Перевіряємо, чи це URL іконки
const isIconUrl = computed(() => {
  if (items.length > 0) {
    const firstItem = items[0];
    return (
      firstItem &&
      !firstItem.icon &&
      !!firstItem.iconUrl
    );
  }
  return false;
});

// Форматуємо значення для відображення
const formattedValue = computed(() => {
  return typeof value === 'number'
    ? value.toFixed(2)
    : '0.00';
});

useClickOutside(balance, () => {
  open.value = false;
});
</script>

<template>
  <div class="balance" ref="balance">
    <button class="button" @click="open = !open">
      <span class="value text-body-bold"
        >$ {{ formattedValue }}</span
      >
      <component
        v-if="!isIconUrl"
        :is="selectedTokenIcon"
        class="token"
      />
      <img
        v-else
        :src="selectedTokenIcon as string"
        class="token token-img"
        alt="Token"
      />
      <ArrowDown
        :class="['arrow', open && 'rotate']"
      />
    </button>
    <div class="wallet">
      <Wallet />
    </div>

    <div class="dropdown" v-if="open">
      <div class="head">
        <span class="title">Balances</span>
      </div>
      <div class="list">
        <div class="list__wrapper">
          <button
            @click="$emit('select')"
            class="item"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="item__left">
              <span
                class="item__value text-body-bold"
                >{{ item.value }}</span
              >
              <span
                class="item__price text-notification"
                >{{ item.price }}</span
              >
            </div>

            <div class="item__token">
              <span
                class="item__token_name text-body"
                >{{ item.name }}</span
              >
              <component
                v-if="item.icon"
                :is="item.icon"
                class="item__token_icon"
              />
              <img
                v-else-if="item.iconUrl"
                :src="item.iconUrl"
                class="item__token_icon item__token_icon-img"
                :alt="item.name"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balance {
  position: relative;
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px 0 0 8px;
  background-color: $bg;
}

.value {
  margin-right: 4px;
  color: $white;
}

.token {
  font-size: 21px;
  margin-right: 8px;

  &.token-img {
    width: 21px;
    height: 21px;
    object-fit: contain;
  }
}

.arrow {
  font-size: 24px;
  color: $accent;
  transition: all 0.3s ease 0s;

  &.rotate {
    transform: scaleY(-1);
  }
}

.wallet {
  width: 40px;
  height: 40px;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: $accent;
  border-radius: 0 8px 8px 0;
}

.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: calc(110%);
  overflow: hidden;
}

.head {
  padding: 4px 12px;
  padding-bottom: 8px;
  background-color: rgba($bg-secondary, 0.8);
  margin-bottom: -6px;
  border-radius: 8px 8px 0 0;
  border: 1px solid rgba($white, 0.8);
}

.title {
  font-weight: 700;
  font-size: 14px;
}

.list {
  border-radius: 8px 8px 0 0;
  background-color: $white;
  padding: 8px 12px;
  padding-left: 0px;

  &__wrapper {
    max-height: 240px;
    overflow: auto;
    @include scrollbars(
      2px,
      $accent,
      #d9d9d9,
      100px
    );
  }
}

.item {
  padding: 8px 10px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  background-color: $white;

  @media (any-hover: hover) {
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
      background-color: rgba($accent, 0.1);
    }
  }

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0%;
      width: 100%;
      height: 1px;
      background-color: $extra-light;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
  }

  &__value {
    color: $bg;
  }

  &__price {
    color: $grey-light;
  }

  &__token {
    display: flex;
    align-items: center;
    gap: 2px;

    &_name {
      color: $bg;
    }

    &_icon {
      width: 14px;
      height: 14px;

      &-img {
        object-fit: contain;
      }
    }
  }
}
</style>
