import { createApp } from 'vue';
import Info from '@views/home/components/Info/index.vue';

// Функция для инициализации
export function init(selector = '#info') {
  const root = document.querySelector(selector) as HTMLElement;
  
  if (!root) {
    console.warn(`Element with selector "${selector}" not found`);
    return;
  }

  // Отримуємо початкові дані з window.__DATA__
  let legal: any = {};

  if ((window as any).__DATA__?.legal && typeof (window as any).__DATA__.legal === 'object') {
    legal = (window as any).__DATA__.legal;
  }

  // Створюємо додаток з props
  const app = createApp(Info, {
    initialLegal: legal,
  });

  app.mount(root);
  return app;
}

init();
