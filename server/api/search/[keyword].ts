import type { ApiMeal } from '~/server/types'
import parseMeal from '~/server/utils/parseMeal'

interface ApiResponse {
  meals: ApiMeal[] | null
}

export default defineEventHandler(async (event) => {
  const keyword = getRouterParam(event, 'keyword')
  const fetch = useMealDb(event)

  const result = await fetch<ApiResponse>(`/search.php?s=${keyword}`)

  if (!result.meals) {
    return []
  }

  const meals = result.meals.map(parseMeal)

  return meals
})
