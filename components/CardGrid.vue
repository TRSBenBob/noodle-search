<template>
  <div class="CardGrid p-8 grid gap-8 mx-auto w-full">
    <slot />
  </div>
</template>

<style scoped>
.CardGrid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
