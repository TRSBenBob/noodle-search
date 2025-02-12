<script setup lang="ts">
import type { Meal } from '~/types'

defineProps<{
  meal: Meal
}>()
</script>

<template>
  <div class="card max-sm:card-side bg-base-100 shadow-xl">
    <figure v-if="meal.thumb">
      <img :src="meal.thumb" :alt="meal.name" class="w-32 sm:w-auto h-full flex-auto">
    </figure>
    <div class="card-body flex-auto">
      <h2 class="card-title line-clamp-2 text-ellipsis">
        {{ meal.name }}
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
  </div>
</template>
