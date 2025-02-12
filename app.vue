<script setup lang="ts">
const mealStore = useMealStore()
</script>

<template>
  <div
    class="grid gap-8 h-screen bg-base-200 transition-[grid-template-rows] duration-500 ease-out overflow-hidden p-4"
    :class="mealStore.meals.length ? 'grid-rows-[0fr,1fr]' : 'grid-rows-[1fr,1fr]'"
  >
    <Hero />

    <div class="flex self-start h-full overflow-auto w-full">
      <template v-if="mealStore.loading">
        <CardGrid>
          <MealCardSkeleton v-for="_ in 3" :key="_" />
        </CardGrid>
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
