import { createApp } from 'vue';
import Info from '@views/home/components/Info/index.vue';

// Функция для инициализации
export function init(selector = '#info') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Info);
    app.mount(el);
    return app;
  }
}

    init();
