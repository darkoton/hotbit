import { createApp } from 'vue';
import Security from '@views/settings/components/Security/index.vue';

// Функция для инициализации
export function init(selector = '#security') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Security);
    app.mount(el);
    return app;
  }
}

init();
