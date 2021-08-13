import { onUnmounted, onMounted, ref, computed } from 'vue';
export default function () {
  const screenSize = ref<number>(window.innerWidth);

  const isMobileView = computed(() => {
    if (typeof screenSize.value === 'number') {
      return screenSize.value < 550 ? true : false;
    }
    return null;
  });

  const resizeEventHandler = (e: Event) => {
    screenSize.value = (e.target as Window).innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', resizeEventHandler);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resizeEventHandler);
  });

  return {
    screenSize,
    isMobileView,
  };
}
