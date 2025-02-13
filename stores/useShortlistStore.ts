import type { Meal } from '~/types'

export default defineStore('shortlist', () => {
  const shortlist = ref<string[]>([])
  const hasShortlistItems = computed(() => shortlist.value.length)

  function addToShortlist(meal: Meal) {
    if (shortlist.value.includes(meal.id))
      return

    shortlist.value = [...shortlist.value, meal.id]
  }

  function removeFromShortlist(meal: Meal) {
    shortlist.value = shortlist.value.filter(id => id !== meal.id)
  }

  function clearShortlist() {
    shortlist.value = []
  }

  function toggleShortlisted(meal: Meal) {
    if (hasMealInShortlist(meal)) {
      removeFromShortlist(meal)
    }
    else {
      addToShortlist(meal)
    }
  }

  function hasMealInShortlist(meal: Meal) {
    return shortlist.value.includes(meal.id)
  }

  return {
    shortlist,

    hasShortlistItems,

    addToShortlist,
    removeFromShortlist,
    toggleShortlisted,
    clearShortlist,
    hasMealInShortlist,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ['shortlist'],
  },
})
