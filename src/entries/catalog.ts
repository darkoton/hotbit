import { createApp } from 'vue';
import Catalog from '@views/home/components/Catalog/index.vue';

// Функция для инициализации
export function init(selector = '#catalog') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Catalog);
    app.mount(el);
    return app;
  }
}

init();
