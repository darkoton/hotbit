import { createApp } from 'vue';
import Save from '@views/settings/components/Save/index.vue';

// Функция для инициализации
export function init(selector = '#save') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Save);
    app.mount(el);
    return app;
  }
}

init();
