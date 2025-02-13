export default function () {
  // TODO: Replace with actual food suggestions from themealdb
  const suggestions = ['chicken', 'beef', 'spaghetti', 'pasta', 'pizza', 'sushi', 'curry', 'tacos', 'burgers', 'salad']

  const suggestion = ref<string>()

  function updateSuggestion() {
    // First pick only suggestions that are not the current suggestion
    const available = suggestions.filter(s => suggestion.value !== s)

    const r = Math.floor(Math.random() * available.length)

    // Then pick a random suggestion from the remaining
    suggestion.value = available[r]
  }

  updateSuggestion()

  return [suggestion, updateSuggestion] as [foo: Ref<string>, bar: () => void]
}
