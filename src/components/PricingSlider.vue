<template>
  <label class="slider-container">
    <span class="value">{{ pageViews }}</span>
    <span class="price"
      >${{ price }}
      <span>/ month</span>
    </span>
    <input
      type="range"
      name="Page views"
      :max="sliderConfig.maxValue"
      :min="sliderConfig.minValue + 1"
      @input="sliderHandler"
      :value="modelValue"
      class="slider"
    />
  </label>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{
  modelValue: number;
  price: string;
  pageViews: string;
  isYearly: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', payload: number | string): void;
}>();

const sliderConfig = {
  minValue: 0,
  maxValue: 200,
};

const backgroundSize = computed(() => {
  return (
    props.modelValue / 2 -
    (sliderConfig.minValue * 100) /
      (sliderConfig.maxValue - sliderConfig.minValue) +
    '% 100%'
  );
});

const sliderHandler = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixins.scss';

.slider-container {
  display: grid;
  align-items: center;
  text-align: center;
  @include screenMedium {
    justify-content: space-between;
  }
  @include screenSmallOnly {
    margin-bottom: 2.13rem;
  }

  .value {
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 4vw, 0.75vw);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    @include screenMedium {
      grid-column: 1 / 2;
    }
  }
  .price {
    font-size: clamp(2rem, 5vw, 2.44rem);
    font-weight: 800;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-self: center;

    grid-row: 3;

    @include screenMedium {
      grid-column: 2/3;
      grid-row: unset;
    }
    > span {
      margin-left: 0.75em;
      font-size: 0.75rem;
      font-size: clamp(0.875rem, 4vw, 1rem);
      font-weight: 600;
      color: var(--text-light);
    }
  }

  .slider {
    -webkit-appearance: none;
    position: relative;
    width: 100%;
    height: 0.5rem;
    background: var(--slider-bar-empty);
    border-radius: 5rem;
    margin: 2.5rem 0;
    cursor: pointer;

    background-color: #dedede;
    background-image: -webkit-gradient(
      linear,
      50% 0%,
      50% 100%,
      color-stop(0%, var(--slider-bar-full)),
      color-stop(100%, var(--slider-bar-full))
    );
    background-repeat: no-repeat;
    background-size: v-bind(backgroundSize);
    cursor: pointer;

    @include screenMedium {
      grid-column: 1 / 3;
    }
  }

  .slider::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
  }
  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4rem;
    background: var(--slider-background) url('../assets/images/icon-slider.svg')
      no-repeat center;
    box-shadow: 0 0.75em 1.125rem rgba(16, 213, 193, 0.61);
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    z-index: 2;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4rem;
    background: var(--slider-background) url('../assets/images/icon-slider.svg')
      no-repeat center;
    box-shadow: 0 0.75em 1.125rem rgba(16, 213, 193, 0.61);
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--slider-background);
    cursor: pointer;
  }

  .slider::-ms-fill-lower {
    background: #e33d44;
    border-radius: 0;
  }
}
</style>
