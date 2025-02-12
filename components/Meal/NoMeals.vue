<script setup lang="ts">
const emit = defineEmits<{
  (e: 'suggest', suggestion: string): void
}>()
const suggestions = ['spaghetti', 'pasta', 'pizza', 'sushi', 'ramen', 'curry', 'tacos', 'burgers', 'salad']
const suggestion = ref<string>(suggestions[0])

onMounted(() => {
  const r = Math.floor(Math.random() * suggestions.length)

  suggestion.value = suggestions[r]
})
</script>

<template>
  <div class="hero bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h2 class="text-3xl font-bold">
          No meals found
        </h2>
        <p class="py-6">
          We couldn't find any meals for you.
        </p>
        <button class="btn-link btn-primary" @click="emit('suggest', suggestion)">
          Try "{{ suggestion }}"
        </button>
      </div>
    </div>
  </div>
</template>
