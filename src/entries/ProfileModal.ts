import { createApp } from 'vue';
import ProfileModal from '@components/ui/modals/Profile/index.vue';

// Функция для инициализации2
export function init(selector = '#profileModal') {
  const el = document.querySelector(selector);
  if (el) {
    const app = createApp(ProfileModal);
    app.mount(el);
    return app;
  }
}

init();
