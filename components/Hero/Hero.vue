<script setup lang="ts">
const mealStore = useMealStore()
</script>

<template>
  <div class="sticky top-0 grid place-items-center self-end z-10 bg-base-200 p-4">
    <div class="text-center w-full max-w-md flex flex-col gap-4">
      <div class="flex">
        <h1 class="text-5xl font-bold">
          <HeroLogo />
        </h1>

        <!-- TODO: Use store state rather than checkbox value "hack" -->
        <label for="shortlist-drawer" class="ml-auto btn btn-accent btn-circle drawer-button">
          <Icon name="mdi:heart" size="20" />
        </label>
      </div>

      <!-- TODO: Refactor out components for clearer separation of concerns -->
      <form class="sm:join" @submit.prevent="mealStore.updateMeals">
        <label class="input input-bordered w-full join-item flex items-center gap-2">
          <input
            v-model="mealStore.search"
            role="search"
            type="search"
            class="grow"
            placeholder="What are you hungry for?"
          >

          <Icon v-if="mealStore.search" name="hugeicons:cancel-01" size="20" class="cursor-pointer" @click="mealStore.search = ''" />
        </label>

        <button type="submit" class="hidden sm:btn sm:btn-primary join-item" :disabled="mealStore.loading || !mealStore.search">
          <Icon name="hugeicons:search-01" size="20" />
        </button>
      </form>

      <p v-if="!mealStore.search">
        Fancy some <button class="btn-link" @click="mealStore.applySuggestion">
          {{ mealStore.suggestion }}
        </button>?
      </p>
    </div>
  </div>
</template>

<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
</style>
