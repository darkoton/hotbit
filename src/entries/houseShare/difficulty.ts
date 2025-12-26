import { createApp } from 'vue';
import Difficulty from '@views/houseShare/components/Difficulty/index.vue';

// Функция для инициализации
export function init(selector = '#difficulty') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Difficulty);
    app.mount(el);
    return app;
  }
}

init();
