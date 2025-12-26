import { createApp } from 'vue';
import Head from '@views/houseShare/components/Head/index.vue';

// Функция для инициализации
export function init(selector = '#head') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Head);
    app.mount(el);
    return app;
  }
}

init();
