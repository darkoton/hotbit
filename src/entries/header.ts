import { createApp } from 'vue';
import Header from '@components/layouts/Header/index.vue';

// Функция для инициализации
export function init(selector = '#app-header') {
  const root = document.querySelector(selector) as HTMLElement;

  if (!root) {
    console.warn(`Element with selector "${selector}" not found`);
    return;
  }

  // Отримуємо дані з data-атрибутів
  let wallets: any[] = [];
  let user: any = null;
  let logo: string | null = null;

  try {
    const walletsData = root.getAttribute('data-wallets') || root.dataset.wallets;
    if (walletsData) {
      wallets = JSON.parse(walletsData);
    }
  } catch (e) {
    console.error('Error parsing wallets data:', e);
  }

  try {
    const userData = root.getAttribute('data-user') || root.dataset.user;
    if (userData) {
      user = JSON.parse(userData);
    }
  } catch (e) {
    console.error('Error parsing user data:', e);
  }

  try {
    const logoData = root.getAttribute('data-logo') || root.dataset.logo;
    if (logoData) {
      // Якщо logo передається як JSON (з лапками), потрібно розпарсити
      try {
        logo = JSON.parse(logoData);
      } catch (e) {
        // Якщо не JSON, використовуємо як є
        logo = logoData;
      }
    }
  } catch (e) {
    console.error('Error parsing logo data:', e);
  }

  // Fallback на window.__DATA__ якщо дані не знайдені в атрибутах
  if ((window as any).__DATA__) {
    const windowData = (window as any).__DATA__;

    if ((!wallets || wallets.length === 0) && windowData.wallets && Array.isArray(windowData.wallets)) {
      wallets = windowData.wallets;
    }
    if (!user && windowData.user) {
      user = windowData.user;
    }
    if (!logo && windowData.logo) {
      logo = windowData.logo;
    }
  }

  const app = createApp(Header, {
    wallets,
    user,
    logo,
  });

  app.mount(root);
  return app;
}

init();
