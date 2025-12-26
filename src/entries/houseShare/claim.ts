import { createApp } from 'vue';
import Claim from '@views/houseShare/components/Claim/index.vue';

// Функция для инициализации
export function init(selector = '#claim') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(Claim);
    app.mount(el);
    return app;
  }
}

init();
