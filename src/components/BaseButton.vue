<template>
  <button class="button" @click="buttonHandler">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'buttonClicked'): void;
}>();

const buttonHandler = () => emit('buttonClicked');
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins';
.button {
  display: inline-block;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 800;
  padding: 1em 2em;
  border-radius: 5rem;
  border: none;
  cursor: pointer;

  &.primary {
    color: var(--cta-text);
    background-color: var(--cta-background);
    transition: color 150ms ease-out;

    &:hover {
      color: var(--cta-text-active);
    }
  }
}
</style>
