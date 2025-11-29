import { createApp } from 'vue';
import Wins from '@views/home/components/Wins/index.vue';

// Функция для инициализации
export function init(selector = '#wins') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Wins);
    app.mount(el);
    return app;
  }
}

    init();
