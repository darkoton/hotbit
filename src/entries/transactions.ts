import { createApp } from 'vue';
import Transactions from '@views/transactions/components/Transactions/index.vue';

// Функция для инициализации
export function init(selector = '#transactions') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Transactions);
    app.mount(el);
    return app;
  }
}

init();
