<script setup lang="ts">
const mealStore = useMealStore()
</script>

<template>
  <div class="hero bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <p>
          We couldn't find any meals for you.
        </p>

        <p>
          How about trying some
          <button class="inline btn-link btn-primary" @click="mealStore.applySuggestion">
            {{ mealStore.suggestion }}
          </button>?
        </p>
      </div>
    </div>
  </div>
</template>
