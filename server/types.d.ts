export interface ApiMeal {
  idMeal: string
  strMeal: string
  strDrinkAlternate: string | null
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string | null
  strYoutube: string
  [key: `strIngredient${number}`]: string | null
  [key: `strMeasure${number}`]: string | null
  strSource: string | null
  strImageSource: string | null
  strCreativeCommonsConfirmed: string | null
  dateModified: string | null
}

export interface Meal {
  id: string
  name: string
  category: string
  area: string
  tags: string[]
  thumb: string | null
  youtube: string | null
  source: string | null
  ingredients: {
    name: string
    measure: string | null
  }[]
  instructions: string[]
}
