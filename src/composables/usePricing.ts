import { ref, computed } from 'vue';

export default function () {
  const pricingSlider = ref<number>(15);

  const isMonthly = ref<boolean>(false);

  const pageViews = computed(() => `${pricingSlider.value}k Pageviews`);

  const price = computed(() => (pricingSlider.value * 1.25).toFixed(2));

  return {
    isMonthly,
    pageViews,
    price,
    pricingSlider,
  };
}
