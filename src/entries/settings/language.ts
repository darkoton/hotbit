import { createApp } from 'vue';
import Language from '@views/settings/components/Language/index.vue';

// Функция для инициализации
export function init(selector = '#language') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Language);
    app.mount(el);
    return app;
  }
}

init();
