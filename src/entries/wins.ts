import { createApp } from 'vue';
import Wins from '@views/home/components/Wins/index.vue';

// Функция для инициализации
export function init(selector = '#wins') {
  const root = document.querySelector(selector) as HTMLElement;
  
  if (!root) {
    console.warn(`Element with selector "${selector}" not found`);
    return;
  }

  // Отримуємо початкові дані з window.__DATA__
  let wins: any[] = [];

  if ((window as any).__DATA__?.wins && Array.isArray((window as any).__DATA__.wins)) {
    wins = (window as any).__DATA__.wins;
  }

  // Створюємо додаток з props
  const app = createApp(Wins, {
    initialWins: wins,
  });

  app.mount(root);
  return app;
}

init();
