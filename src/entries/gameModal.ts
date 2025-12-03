import { createApp } from 'vue';
import GameModal from '@components/ui/modals/Game/index.vue';

// Функция для инициализации
export function init(selector = '#gameModal') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(GameModal);
    app.mount(el);
    return app;
  }
}

init();
