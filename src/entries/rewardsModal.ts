import { createApp } from 'vue';
import RewardsModal from '@components/ui/modals/Rewards/index.vue';

// Функция для инициализации
export function init(selector = '#rewardsModal') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(RewardsModal);
    app.mount(el);
    return app;
  }
}

init();
