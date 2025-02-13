import type { Meal } from '~/types'

/**
 * Provides meal search functionality, including ingredient suggestions
 */
export default defineStore('meals', () => {
  const search = ref('')
  const loading = ref(false)
  const error = ref<unknown>(null)
  const meals = ref<Meal[]>([])

  // TODO: Should suggestions come from their own store?
  // https://pinia.vuejs.org/cookbook/composing-stores.html
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

      // TODO: Error handling is mostly swallowed by the frontend currently.
      // We should notify the user if the API call fails and provide an alternative
      // user journey if possible
      console.error(ex)
    }
    finally {
      loading.value = false
      updateSuggestion()
    }
  }

  function setMeals(forced: Meal[]) {
    meals.value = forced
  }

  return {
    search,

    loading,
    error,
    meals,
    updateMeals,

    setMeals,

    suggestion,
    updateSuggestion,
    applySuggestion,
  }
})
