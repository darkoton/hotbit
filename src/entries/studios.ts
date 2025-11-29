import { createApp } from 'vue';
import Studios from '@views/home/components/Studios/index.vue';

// Функция для инициализации
export function init(selector = '#studios') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Studios);
    app.mount(el);
    return app;
  }
}

    init();
