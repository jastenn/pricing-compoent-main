<template>
  <header class="pricing-header container">
    <h1>Simple, traffic-based pricing</h1>
    <p>Sign-up for our 30-day trial. No credit card required</p>
  </header>
  <Pricing />
</template>

<script setup lang="ts">
import Pricing from './components/Pricing.vue';
</script>

<style lang="scss">
:root {
  --text-dark: hsl(227, 35%, 25%);
  --text-light: hsl(225, 20%, 60%);
  --pricing-component-background: hsl(0, 0%, 100%);
  --main-background: hsl(230, 100%, 99%);

  --toggle-background-inactive: hsl(223, 50%, 87%);
  --toggle-background-active: hsl(174, 86%, 45%);
  --toggle-thumb: hsl(0, 0%, 100%);

  --cta-text: hsl(226, 100%, 87%);
  --cta-background: hsl(227, 35%, 25%);
  --cta-text-active: hsl(0, 0%, 100%);

  --discount-background: hsl(14, 92%, 95%);
  --discount-text: hsl(15, 100%, 70%);

  --slider-bar-full: hsl(174, 77%, 80%);
  --slider-background: hsl(174, 86%, 45%);
  --slider-bar-empty: hsl(224, 65%, 95%);
  --slider-background-active: hsl(174, 66%, 41%);
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 100%;
}

body {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-light);

  background: var(--main-background) url('./assets/images/bg-pattern.svg')
    no-repeat top;
  box-sizing: border-box;
  min-height: 100vh;
}

.container {
  width: 87%;
  max-width: 33.75rem;
  margin: 0 auto;
}

.pricing {
  background-color: var(--pricing-component-background);
  padding: 2rem 1rem;
  border-radius: 0.5em;
  box-shadow: 0 0.4em 0.75em rgba($color: #000000, $alpha: 0.08);
  &-header {
    margin-top: clamp(2.5rem, 5.75vw, 4rem);
    margin-bottom: clamp(1.75rem, 4vw, 3rem);
    text-align: center;
    background: url('./assets/images/pattern-circles.svg') no-repeat;
    padding: 3.15rem 0;
    background-position: center;

    > h1 {
      font-size: 1.5rem;
      font-size: clamp(1.25rem, 4vw, 1.75rem);
      color: var(--text-dark);
    }

    > p {
      font-size: 0.9375rem;
      font-size: clamp(0.8125rem, 2.15vw, 0.9375rem);
    }
  }
}
</style>
