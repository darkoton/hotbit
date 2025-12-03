import { createApp } from 'vue';
import FavoritesModal from '@components/ui/modals/Favorites/index.vue';

// Функция для инициализации
export function init(selector = '#favoritesModal') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(FavoritesModal);
    app.mount(el);
    return app;
  }
}

init();
