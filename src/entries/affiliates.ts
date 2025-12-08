import { createApp } from 'vue';
import Affiliates from '@views/affiliates/components/Affiliates/index.vue';

// Функция для инициализации
export function init(selector = '#affiliates') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Affiliates);
    app.mount(el);
    return app;
  }
}

init();
