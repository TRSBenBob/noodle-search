<script setup lang="ts">
import type { Meal } from '~/types'

const props = defineProps<{
  id: string
}>()

const shortlistStore = useShortlistStore()
const mealStore = useMealStore()

// Hydrate `meal` from api response
// TODO: Batch this operation in the parent component
const meal = await $fetch(`/api/meal/${props.id}`)

// If the meal is not found, remove it from the shortlist
if (meal === null) {
  shortlistStore.removeFromShortlist({ id: props.id } as Meal)
}
</script>

<template>
  <div v-if="meal" class="flex items-center gap-4 w-full">
    <button class="btn-link flex-1 text-left" @click="mealStore.setMeals([meal])">
      {{ meal.name }}
    </button>

    <button
      class="btn btn-ghost btn-circle btn-xs text-base"
      @click="shortlistStore.removeFromShortlist(meal)"
    >
      <Icon name="hugeicons:cancel-circle" size="16" />
    </button>
  </div>
</template>
