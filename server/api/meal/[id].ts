import type { ApiMeal } from '~/types'

interface ApiResponse {
  meals: ApiMeal[] | null
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const fetch = useMealDb(event)
  const meal = await fetch<ApiResponse>(`/lookup.php?i=${id}`)

  // Handle 404 response properly for this endpoint
  // Frontend needs to know if meal is missing
  if (meal.meals === null || meal.meals.length === 0) {
    setResponseStatus(event, 404, 'Not Found')
    return null
  }

  return parseMeal(meal.meals[0])
})
