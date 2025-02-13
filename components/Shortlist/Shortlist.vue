<script setup lang="ts">
const shortlistStore = useShortlistStore()
</script>

<template>
  <div class="bg-base-100 text-base-content min-h-full w-80 py-4 px-4">
    <div class="flex">
      <h2 class="text-3xl font-bold py-2 mb-6">
        Shortlist
      </h2>

      <label for="shortlist-drawer" class="ml-auto btn btn-ghost btn-circle drawer-button">
        <Icon name="hugeicons:cancel-01" size="20" />
      </label>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <Suspense v-for="id in shortlistStore.shortlist" :key="id">
          <ShortlistMeal :id />

          <template #fallback>
            <div class="flex gap-8 w-full">
              <div class="skeleton h-6 flex-1" />
              <div class="skeleton h-6 w-6 rounded-full" />
            </div>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>
