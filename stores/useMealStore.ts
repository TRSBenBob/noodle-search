import type { Meal } from '~/types'

export default defineStore('meals', () => {
  const search = ref('')
  const loading = ref(false)
  const error = ref<unknown>(null)
  const meals = ref<Meal[]>([])

  const [suggestion, updateSuggestion] = useFoodSuggestion()

  function applySuggestion() {
    search.value = suggestion.value

    updateMeals()
  }

  async function updateMeals() {
    loading.value = true

    try {
      meals.value = await $fetch(`/api/search/${search.value}`)
    }
    catch (ex) {
      error.value = ex
      console.error(ex)
    }
    finally {
      loading.value = false
      updateSuggestion()
    }
  }

  return {
    search,

    loading,
    error,
    meals,
    updateMeals,

    suggestion,
    updateSuggestion,
    applySuggestion,
  }
})
