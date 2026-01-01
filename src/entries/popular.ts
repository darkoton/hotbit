import { createApp } from 'vue';
import Popular from '@views/home/components/Popular/index.vue';

// Функция для инициализации
export function init(selector = '#popular') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Popular);
    app.mount(el);
    return app;
  }
}

    init();
