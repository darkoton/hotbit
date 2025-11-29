import { createApp } from 'vue';
import Navigation from '@components/layouts/Navigation/index.vue';

// Функция для инициализации
export function init(selector = '#navigation') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Navigation);
    app.mount(el);
    return app;
  }
}

    init();
