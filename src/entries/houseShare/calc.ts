import { createApp } from 'vue';
import Calc from '@views/houseShare/components/Calc/index.vue';

// Функция для инициализации
export function init(selector = '#calc') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Calc);
    app.mount(el);
    return app;
  }
}

init();
