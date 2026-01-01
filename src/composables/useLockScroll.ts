import { ref, watch, type Ref } from 'vue';

export function useScrollLock(elementRef?: Ref<HTMLElement | null | undefined>) {
  const isLocked = ref<boolean>(false);

  watch(isLocked, (v) => {
    const el = elementRef?.value || document.body;
    if (!el) return;
    el.style.overflow = v ? 'hidden' : 'auto';
  });

  return isLocked;
}
