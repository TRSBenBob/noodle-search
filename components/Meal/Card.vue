<script setup lang="ts">
import type { Meal } from '~/types'

defineProps<{
  meal: Meal
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure v-if="meal.thumb" class="relative">
      <img :src="meal.thumb" :alt="meal.name" class="skeleton rounded-none w-32 sm:w-auto aspect-[3/2] object-cover h-full flex-auto">

      <div v-if="meal.youtube" class="absolute right-1 bottom-1">
        <a :href="meal.youtube" target="_blank" class="border-0 btn btn-sm btn-circle bg-red-500 text-white">
          <Icon name="mdi:youtube" size="20" />
        </a>
      </div>
    </figure>

    <div class="card-body flex-auto gap-2">
      <h2 class="card-title line-clamp-2 text-ellipsis">
        {{ meal.name }}
      </h2>

      <p class="flex flex-wrap gap-2">
        <span
          v-for="tag in meal.tags"
          :key="tag"
          class="badge badge-sm badge-neutral"
        >
          {{ tag }}
        </span>
      </p>

      <p v-if="meal.source" class="flex gap-1 items-center">
        <a :href="meal.source" target="_blank" class="link link-primary">View recipe</a>

        <Icon name="hugeicons:link-square-01" size="14" />
      </p>
    </div>
  </div>
</template>
