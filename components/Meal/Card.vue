<script setup lang="ts">
import type { Meal } from '~/types'

const props = defineProps<{
  meal: Meal
}>()

const shortlistStore = useShortlistStore()

const isInShortlist = computed(() => shortlistStore.hasMealInShortlist(props.meal))
</script>

<template>
  <div class="card bg-base-100 shadow-xl border-[3px] transition-colors duration-200" :class="isInShortlist ? 'border-accent' : 'border-accent/0'">
    <figure v-if="meal.thumb" class="relative">
      <img :src="meal.thumb" :alt="meal.name" class="skeleton rounded-none w-32 sm:w-auto aspect-[3/2] object-cover h-full flex-auto">

      <div class="absolute left-1 bottom-1">
        <button
          class="border-0 btn btn-sm btn-circle"
          :class="isInShortlist ? 'btn-accent' : 'btn-neutral'"
          @click="shortlistStore.toggleShortlisted(meal)"
        >
          <Icon v-if="!isInShortlist" name="mdi:heart-plus-outline" size="20" />
          <Icon v-else name="mdi:heart-minus" size="20" />
        </button>
      </div>

      <div v-if="meal.youtube" class="absolute right-1 bottom-1">
        <a :href="meal.youtube" target="_blank" class="border-0 btn btn-sm btn-circle btn-error text-white">
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
