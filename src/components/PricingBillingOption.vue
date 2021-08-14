<template>
  <div class="billing-option">
    <label>
      <span>Monthly Billing</span>
      <input
        type="radio"
        name="billing option"
        value="monthly"
        :checked="isMonthly"
        @click="typeOfBillingHandler"
        tabindex="0"
      />
    </label>
    <div
      class="custom-toggle"
      :class="{ active: isMonthly }"
      tabindex="0"
      @click="toggleIsMonthly"
      @keyup="toggleIsMonthly"
    />
    <label class="yearly">
      <span>Yearly Billing</span>
      <input
        type="radio"
        name="billing option"
        value="yearly"
        :checked="!isMonthly"
        @click="typeOfBillingHandler"
        tabindex="0"
      />
      <p class="discount-label">
        <template v-if="isMobileView">-25%</template>
        <template v-else>25% discount</template>
      </p>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useScreenSize from '../composables/useScreenSize';

const props = defineProps<{
  isMonthly: boolean;
}>();

console.log(props.isMonthly);

const emit = defineEmits<{
  (e: 'update:billingOption', payload: boolean): void;
}>();

const billingToggle = ref<HTMLDivElement>();

const { isMobileView } = useScreenSize();

const typeOfBillingHandler = (e: Event) => {
  const element = e.target as HTMLInputElement;
  console.log(billingToggle.value);
  if (element.value === 'yearly') {
    emit('update:billingOption', false);
  } else if ((element.value = 'monthly')) {
    emit('update:billingOption', true);
  }
};

const toggleIsMonthly = (e: Event) => {
  if (e.type === 'click') {
    emit('update:billingOption', !props.isMonthly);
  } else if (e.type === 'keyup') {
    const key = (e as KeyboardEvent).key;
    if (key === 'Enter' || key === ' ') {
      emit('update:billingOption', !props.isMonthly);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';
.billing-option {
  display: flex;
  justify-content: center;
  > * + * {
    margin-left: 0.75em;
  }
  > label {
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
  }
  input {
    position: absolute;
    z-index: -100;
    opacity: 0;
  }
}
.custom-toggle {
  position: relative;
  height: 1.38rem;
  width: 2.693rem;
  background-color: var(--toggle-background-inactive);
  border-radius: 5rem;
  cursor: pointer;
  transition: background-color, opacity 200ms ease-out;

  &:focus {
    outline: none;
    opacity: 0.6;
  }
  &::after {
    content: '';
    position: absolute;
    height: 0.875rem;
    width: 0.875rem;
    border-radius: 5rem;
    background-color: var(--toggle-thumb);
    top: 50%;
    left: 50%;
    transform: translate(10%, -50%);
    transition: transform 200ms ease-out;
  }
  &.active {
    background-color: var(--toggle-background-active);

    &::after {
      transform: translate(-110%, -50%);
    }
  }
}

.yearly {
  position: relative;
}

.discount-label {
  background-color: var(--discount-background);
  color: var(--discount-text);
  font-size: 0.625rem;
  padding: 0.3em 0.75em;
  border-radius: 5rem;
  position: absolute;
  right: -60%;
  top: -50%;
  transform: translateY(50%);
  @media (max-width: 29.375em) {
    transform: unset;
    bottom: unset;
    top: 110%;
    right: 50%;
    transform: translateX(50%);
  }
  @include screenMedium {
    right: 0;
    transform: translate(110%, 50%);
  }
}
</style>
