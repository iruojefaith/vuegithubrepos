<template>
  <transition name="fade">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "FadeTransition",
};
</script>

<style lang="scss" scoped>
.fade {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    transition: 200ms cubic-bezier(1, 0, 0, 1);
  }

  &-enter-active {
    transition-delay: 100ms;
  }
}
</style>
