export default function () {
  const suggestions = ['chicken', 'beef', 'spaghetti', 'pasta', 'pizza', 'sushi', 'curry', 'tacos', 'burgers', 'salad']

  const suggestion = ref<string>()

  function updateSuggestion() {
    const available = suggestions.filter(s => suggestion.value !== s)

    const r = Math.floor(Math.random() * available.length)
    suggestion.value = available[r]
  }

  updateSuggestion()

  return [suggestion, updateSuggestion] as [foo: Ref<string>, bar: () => void]
}
