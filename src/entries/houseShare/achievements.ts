import { createApp } from 'vue';
import Achievements from '@views/houseShare/components/Achievements/index.vue';

// Функция для инициализации
export function init(selector = '#achievements') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Achievements);
    app.mount(el);
    return app;
  }
}

init();
