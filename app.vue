<script setup lang="ts">
const mealStore = useMealStore()
</script>

<template>
  <div
    class="grid h-screen w-screen bg-base-200 transition-[grid-template-rows] duration-500 ease-out overflow-y-auto"
    :class="mealStore.meals.length ? 'grid-rows-[0fr,1fr]' : 'grid-rows-[1fr,1fr]'"
  >
    <Hero />

    <div class="flex self-start justify-center">
      <template v-if="mealStore.loading">
        <span class="loading loading-dots loading-lg" />
      </template>

      <template v-else>
        <MealNoMeals v-if="mealStore.meals.length === 0 && mealStore.search" />

        <CardGrid v-else>
          <MealCard v-for="meal in mealStore.meals" :key="meal.id" :meal />
        </CardGrid>
      </template>
    </div>
  </div>
</template>
