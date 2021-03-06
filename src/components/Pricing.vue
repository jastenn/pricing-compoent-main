<template>
  <form class="pricing-card container" @submit="submitHandler">
    <PricingSlider
      v-model.number="pricingSlider"
      :selectedOption="selectedOption"
      :isMonthly="isMonthly"
      :pricing="pricing"
    />
    <BillingOption
      :isMonthly="isMonthly"
      @update:billingOption="billingOptionHandler"
      class="billing-options"
    />
    <div class="cta-container">
      <div class="sales-points">
        <p v-for="salesPoint in salesPoints" :key="salesPoint.id">
          <Check />
          {{ salesPoint.value }}
        </p>
      </div>
      <BaseButton class="primary">Start my Trial</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import usePricing from '../composables/usePricing';

import PricingSlider from './PricingSlider.vue';
import BillingOption from './PricingBillingOption.vue';
import Check from './icons/Check.vue';
import BaseButton from './BaseButton.vue';

const { pricing, isMonthly, selectedOption, pricingSlider } = usePricing();

const billingOptionHandler = (billingOption: boolean): void => {
  isMonthly.value = billingOption;
};

const submitHandler = (e: Event): void => {
  e.preventDefault();
  console.log('Price: $', selectedOption.value.price);
  console.log(selectedOption.value.pageViews);
  console.log('Monthly Billing: ', isMonthly.value);

  const formValue = {
    price: selectedOption.value.price,
    pageViews: selectedOption.value.pageViews,
    isMonthly: isMonthly.value,
  };
};

const salesPoints: { value: string; id: number }[] = [
  { value: 'Unlimited websites', id: 1 },
  { value: '100% data ownership', id: 2 },
  { value: 'Email Reports', id: 3 },
];
</script>

<style lang="scss" scope>
@import '../assets/scss/mixins';
.billing-options {
  margin-bottom: 3rem;
  padding-top: 0.875rem;
  &::after {
    content: '';
    height: 2px;
    background-color: var(--slider-bar-empty);
    width: 100%;
    position: absolute;
    transform: translateY(4rem);
  }
}
.pricing-card {
  position: relative;
  background-color: var(--pricing-component-background);
  padding: 2rem clamp(1.5rem, 6vw, 3.13rem);
  border-radius: 0.5em;
  box-shadow: 0 0.4em 0.75em rgba($color: #000000, $alpha: 0.08);
}

.cta-container {
  text-align: center;
  padding-top: 2em;

  > * + * {
    margin-top: 1.75em;
  }
  @include screenMedium {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: unset;
  }

  .sales-points {
    font-size: 0.75rem;
    > * + * {
      margin-top: 0.625em;
    }
  }
}
</style>
