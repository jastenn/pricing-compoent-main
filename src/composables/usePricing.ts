import { ref, computed } from 'vue';
import { pricing } from '../types/interfaces';

const pricing: pricing[] = [
  { price: 8, pageViews: '10K', id: 1 },
  { price: 12, pageViews: '50K', id: 2 },
  { price: 16, pageViews: '100K', id: 3 },
  { price: 24, pageViews: '500K', id: 4 },
  { price: 36, pageViews: '1M', id: 5 },
];

export default function () {
  const pricingSlider = ref<number>(2);

  const isMonthly = ref<boolean>(false);

  const selectedOption = computed((): pricing => {
    return pricing.find((_, idx) => {
      return idx + 1 === pricingSlider.value;
    })!;
  });

  return {
    pricing,
    isMonthly,
    selectedOption,
    pricingSlider,
  };
}
