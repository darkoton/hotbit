import { createApp } from 'vue';
import Studios from '@views/home/components/Studios/index.vue';

// Функция для инициализации
export function init(selector = '#studios') {
  const root = document.querySelector(selector) as HTMLElement;
  
  if (!root) {
    console.warn(`Element with selector "${selector}" not found`);
    return;
  }

  // Отримуємо початкові дані з window.__DATA__
  let studios: any[] = [];

  if ((window as any).__DATA__?.studios && Array.isArray((window as any).__DATA__.studios)) {
    studios = (window as any).__DATA__.studios;
  }

  // Створюємо додаток з props
  const app = createApp(Studios, {
    initialStudios: studios,
  });

  app.mount(root);
  return app;
}

init();
