import { createApp } from 'vue';
import User from '@views/settings/components/User/index.vue';

// Функция для инициализации
export function init(selector = '#user') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(User);
    app.mount(el);
    return app;
  }
}

init();
