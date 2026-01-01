import { createApp } from 'vue';
import Recently from '@views/home/components/Recently/index.vue';

// Функция для инициализации
export function init(selector = '#recently') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Recently);
    app.mount(el);
    return app;
  }
}

init();
