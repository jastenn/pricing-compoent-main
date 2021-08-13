<template>
  <div class="pricing-card container">
    <PricingSlider
      v-model.number="pricingSlider"
      :pageViews="pageViews"
      :price="price"
      :isYearly="false"
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
      <button class="submit-btn">Start my Trial</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import usePricing from '../composables/usePricing';

import PricingSlider from './PricingSlider.vue';
import BillingOption from './PricingBillingOption.vue';
import Check from './icons/Check.vue';

const { isMonthly, pageViews, price, pricingSlider } = usePricing();

const billingOptionHandler = (billingOption: boolean): void => {
  isMonthly.value = billingOption;
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

  .submit-btn {
    display: inline-block;
    background-color: var(--cta-background);
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 800;
    padding: 1em 2em;
    border-radius: 5rem;
    border: none;
    cursor: pointer;

    color: var(--cta-text);
  }
}
</style>
