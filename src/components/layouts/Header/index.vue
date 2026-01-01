<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import styles from './style.module.scss';
import LogoDefault from '@assets/imgs/logo.png';
import { urls } from '@configs/router/urls';
import Container from '@components/layouts/Container.vue';
import BalanceSelect from '@components/ui/BalanceSelect.vue';
import Account from '@components/ui/Account.vue';
import { useWebSocket, type WalletData, type PriceUpdate } from '@/composables/useWebSocket';
import { useSupportedTokens } from '@/composables/useSupportedTokens';

// Props
interface Wallet {
  coin_id?: string;
  coinId?: string;
  balance: number;
}

interface User {
  avatar?: string;
  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    wallets?: Wallet[];
    user?: User;
    logo?: string | null;
  }>(),
  {
    wallets: () => [],
    user: () => ({}),
    logo: null,
  }
);

// Тип для балансу
interface BalanceItem {
  value: string;
  price: string;
  name: string;
  iconUrl?: string;
  coinId: string;
  balance: number;
}

// Отримуємо підтримувані токени з API
const { tokens: supportedTokens, getTokenBySymbol } = useSupportedTokens();

const wallets = ref<WalletData[]>([]);
const balances = ref<BalanceItem[]>([]);
const totalUsd = ref(0);

// Ініціалізація даних з props
const initializeWallets = () => {
  if (props.wallets && Array.isArray(props.wallets) && props.wallets.length > 0) {
    wallets.value = props.wallets.map((wallet) => {
      const coinId = (wallet.coin_id || wallet.coinId || '').toUpperCase();
      const balance = parseFloat(String(wallet.balance)) || 0;
      
      return {
        coin_id: coinId,
        balance: balance,
        usd: 0,
      };
    });

    updateBalances();
  }
};

// Спостерігаємо за змінами props
watch(
  () => props.wallets,
  () => {
    initializeWallets();
  },
  { immediate: true, deep: true }
);


// Спостерігаємо за завантаженням токенів і оновлюємо баланси
watch(
  () => supportedTokens.value,
  (newTokens) => {
    if (newTokens.length > 0 && wallets.value.length > 0) {
      updateBalances();
    }
  },
  { deep: true }
);

// Оновлення балансів на основі даних про гаманці
const updateBalances = () => {
  if (wallets.value.length === 0) {
    balances.value = [];
    totalUsd.value = 0;
    return;
  }
  
  balances.value = wallets.value.map((wallet) => {
    const coinId = wallet.coin_id.toUpperCase();
    const balance = wallet.balance;
    const usd = wallet.usd || 0;
    
    // Отримуємо інформацію про токен з API
    const tokenInfo = getTokenBySymbol(coinId);
    const iconUrl = tokenInfo?.logoUrl;

    // Оновлюємо DOM елементи для сумісності зі старим кодом
    const balanceElem = document.getElementById(`balance-${coinId.toLowerCase()}`);
    const usdElem = document.getElementById(`usd-${coinId.toLowerCase()}`);
    
    if (balanceElem) {
      balanceElem.textContent = balance.toFixed(6);
    }
    if (usdElem) {
      usdElem.textContent = `$${usd.toFixed(2)}`;
    }

    return {
      coinId,
      balance,
      name: tokenInfo?.coinFullName || coinId,
      iconUrl,
      value: `$${usd.toFixed(2)}`,
      price: `${balance.toFixed(6)} ${coinId}`,
    };
  });

  // Обчислюємо загальний баланс в USD
  totalUsd.value = wallets.value.reduce((sum, wallet) => sum + (wallet.usd || 0), 0);
};

// Обробка оновлення ціни з WebSocket
const handlePriceUpdate = (update: PriceUpdate) => {
  const wallet = wallets.value.find(
    (w) => w.coin_id.toUpperCase() === update.coin
  );

  if (wallet) {
    wallet.usd = wallet.balance * update.price;
    updateBalances();
  }
};

// Підключення до WebSocket
useWebSocket(handlePriceUpdate);

// Обчислюємо аватар користувача
const userAvatar = computed(() => {
  return props.user?.avatar || '/imgs/avatar.png';
});

// Обчислюємо логотип (динамічний з props або fallback на статичний)
const logo = computed(() => {
  return props.logo || LogoDefault;
});

onMounted(() => {
  initializeWallets();
});
</script>

<template>
  <header :class="styles.header">
    <Container>
      <div :class="styles.body">
        <button :to="urls.home">
          <img
            width="60"
            height="25"
            :src="logo"
            alt="Logo"
          />
        </button>

        <BalanceSelect
          :value="totalUsd"
          :items="balances"
        />

        <Account
          :avatar="userAvatar"
          :progress-value="35"
        />
      </div>
    </Container>
  </header>
</template>
