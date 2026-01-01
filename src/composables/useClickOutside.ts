import {
  onMounted,
  onUnmounted,
  isRef,
  type Ref,
} from 'vue';

export function useClickOutside(
  elements:
    | Ref<HTMLElement | null>
    | Array<
      | Ref<HTMLElement | null>
      | HTMLElement
      | null
    >,
  callback: () => void
) {
  function isOutside(
    target: Node,
    el:
      | Ref<HTMLElement | null>
      | HTMLElement
      | null
  ) {
    const node = isRef(el) ? el.value : el;



    return !node || !node.contains(target);
  }

  function handler(event: MouseEvent) {
    const target = event.target as Node;

    if (Array.isArray(elements)) {
      // клик снаружи ВСЕХ элементов
      if (
        elements.every((el) =>
          isOutside(target, el)
        )
      ) {
        callback();
      }
    } else {
      // одиночный элемент
      if (isOutside(target, elements)) {
        callback();
      }
    }
  }

  onMounted(() => {
    document.addEventListener(
      'mousedown',
      handler
    );
  });

  onUnmounted(() => {
    document.removeEventListener(
      'mousedown',
      handler
    );
  });
}
