import { createApp } from 'vue';
import Banner from '@views/home/components/Banner/index.vue';

// Функция для инициализации
export function init(selector = '#banner') {
  const root = document.querySelector(selector) as HTMLElement;

  if (!root) {
    console.warn(`Element with selector "${selector}" not found`);
    return;
  }

  // Отримуємо дані з window.__DATA__
  let banners: any[] = [];

  if ((window as any).__DATA__?.banners && Array.isArray((window as any).__DATA__.banners)) {
    banners = (window as any).__DATA__.banners;
  }

  // Створюємо додаток з props
  const app = createApp(Banner, {
    banners,
  });

  app.mount(root);
  return app;
}

init();
