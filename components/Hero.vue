<script setup lang="ts">
defineProps<{
  disabled: boolean
}>()

const emit = defineEmits<{
  (e: 'search', search: string): void
}>()

const search = defineModel<string>({ required: true })
</script>

<template>
  <div class="grid place-items-center self-end">
    <div class="text-center w-full max-w-md flex flex-col">
      <h1 class="text-5xl font-bold">
        Noodle
      </h1>

      <p class="py-6">
        What are you hungry for?
      </p>

      <form class="join" @submit.prevent="emit('search', search)">
        <input v-model="search" type="search" placeholder="Type here" class="input input-bordered w-full max-w-sm join-item">

        <button type="submit" class="btn btn-primary join-item" :disabled="disabled || !search">
          Search
        </button>
      </form>
    </div>
  </div>
</template>
