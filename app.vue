<script setup lang="ts">
import type { Meal } from '~/types'

const search = ref('')

const loading = ref(false)
const error = ref<unknown>(null)
const meals = ref<Meal[]>([])

async function getMeals(search: string) {
  loading.value = true

  try {
    meals.value = await $fetch(`/api/search/${search}`)
  }
  catch (ex) {
    error.value = ex
    console.error(ex)
  }
  finally {
    loading.value = false
  }
}

function applySuggestion(suggestion: string) {
  search.value = suggestion
  getMeals(suggestion)
}
</script>

<template>
  <div
    class="grid gap-8 h-screen bg-base-200 transition-[grid-template-rows] duration-1000 ease-out overflow-hidden p-4"
    :class="meals?.length ? 'grid-rows-[0fr,1fr]' : 'grid-rows-[1fr,1fr]'"
  >
    <Hero v-model="search" :disabled="loading" @search="getMeals" />

    <div class="flex self-start h-full overflow-auto w-full">
      <template v-if="loading">
        <CardGrid>
          <MealCardSkeleton v-for="_ in 3" :key="_" />
        </CardGrid>
      </template>

      <template v-else>
        <MealNoMeals v-if="meals.length === 0" @suggest="applySuggestion" />

        <CardGrid v-else>
          <MealCard v-for="meal in meals" :key="meal.id" :meal />
        </CardGrid>
      </template>
    </div>
  </div>
</template>
