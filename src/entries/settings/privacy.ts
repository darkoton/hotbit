import { createApp } from 'vue';
import Privacy from '@views/settings/components/Privacy/index.vue';

// Функция для инициализации
export function init(selector = '#privacy') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Privacy);
    app.mount(el);
    return app;
  }
}

init();
