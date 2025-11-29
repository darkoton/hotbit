import { createApp } from 'vue';
import Header from '@components/layouts/Header/index.vue';

// Функция для инициализации
export function init(selector = '#header') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Header);
    app.mount(el);
    return app;
  }
}

    init();
