<script setup lang="ts">
const mealStore = useMealStore()
</script>

<template>
  <div class="grid place-items-center self-end">
    <div class="text-center w-full max-w-md flex flex-col gap-4">
      <h1 class="text-5xl font-bold">
        <HeroLogo />
      </h1>

      <form class="join" @submit.prevent="mealStore.updateMeals">
        <label class="input input-bordered w-full max-w-sm join-item flex items-center gap-2">
          <input v-model="mealStore.search" type="search" class="grow" placeholder="What are you hungry for?">

          <span v-if="mealStore.search" class="badge badge-neutral px-2 cursor-pointer" @click="mealStore.search = ''">&times;</span>
        </label>

        <button type="submit" class="btn btn-primary join-item" :disabled="mealStore.loading || !mealStore.search">
          Yum
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
