import { createApp } from 'vue';
import Banner from '@views/home/components/Banner/index.vue';

// Функция для инициализации
export function init(selector = '#banner') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Banner);
    app.mount(el);
    return app;
  }
}

    init();
