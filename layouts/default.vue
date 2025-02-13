<template>
  <div class="drawer bg-base-200">
    <input id="shortlist-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side z-10">
      <label for="shortlist-drawer" aria-label="Close shortlist" class="drawer-overlay" />

      <Shortlist />
    </div>
  </div>
</template>

<style scoped>
.drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
  @apply backdrop-blur transition-all;
}
</style>
