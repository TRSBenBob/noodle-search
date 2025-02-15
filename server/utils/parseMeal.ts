import type { ApiMeal, Meal } from '~/types'

function parseInstructions(instructions: string) {
  return instructions?.split('\r\n')
    .map(insruction => insruction.trim())
    .filter(Boolean)
}

// TODO: Reduce data returned from this function until it's used
// `ingredients`, `instructions` are not used and contain a lot of redundant data
export default function parseMeal(meal: ApiMeal) {
  const ingredients = []

  // API response returns up to 20 ingredients and measures
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]?.trim()

    if (!ingredient)
      break

    const measure = meal[`strMeasure${i}`]?.trim() ?? null

    ingredients.push({ name: ingredient, measure })
  }

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    tags: meal.strTags?.split(',').filter(Boolean) ?? [],

    thumb: meal.strMealThumb,
    youtube: meal.strYoutube,
    source: meal.strSource,

    ingredients,
    instructions: parseInstructions(meal.strInstructions),
  } satisfies Meal
}
