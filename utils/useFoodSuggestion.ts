export default function () {
  const suggestions = ['chicken', 'beef', 'spaghetti', 'pasta', 'pizza', 'sushi', 'curry', 'tacos', 'burgers', 'salad']

  const suggestion = ref<string>()

  function updateSuggestion() {
    const r = Math.floor(Math.random() * suggestions.length)
    suggestion.value = suggestions.filter(s => s !== suggestion.value)[r]
  }

  updateSuggestion()

  return [suggestion, updateSuggestion] as [foo: Ref<string>, bar: () => void]
}
