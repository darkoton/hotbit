import { createApp } from 'vue';
import WalletModal from '@components/ui/modals/Wallet/index.vue';

// Функция для инициализации
export function init(selector = '#walletModal') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(WalletModal);
    app.mount(el);
    return app;
  }
}

init();
