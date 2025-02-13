import type { ApiMeal } from '~/types'

import parseMeal from './parseMeal'

it('should parse a basic meal', () => {
  const meal = {
    idMeal: '1234',
    strMeal: 'Mashed Potatoes',
    strDrinkAlternate: null,
    strCategory: 'Side Dish',
    strArea: 'British',
    strInstructions: 'Mash em up',
    strMealThumb: '',
    strTags: null,
    strYoutube: '',
    strIngredient1: 'Potatoes',
    strMeasure1: '1/2 lb',
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  }

  const parsed = parseMeal(meal)

  expect(parsed).toEqual({
    id: '1234',
    name: 'Mashed Potatoes',
    category: 'Side Dish',
    area: 'British',
    tags: [],
    thumb: '',
    youtube: '',
    source: null,
    ingredients: [{ name: 'Potatoes', measure: '1/2 lb' }],
    instructions: ['Mash em up'],
  })
})

it('should parse instructions', () => {
  const instructions = '1. Boil the potatoes until they are soft.\r\n2. Mash them up.'

  const parsed = parseMeal({
    strInstructions: instructions,
  } as ApiMeal)

  expect(parsed.instructions).toEqual([
    '1. Boil the potatoes until they are soft.',
    '2. Mash them up.',
  ])
})

it('should parse ingredients', () => {
  const ingredients = {
    strIngredient1: 'Potatoes',
    strMeasure1: '1/2 lb',
    strIngredient2: 'Onion',
    strMeasure2: '1/2 lb',
    strIngredient3: 'Carrots',
    strMeasure3: '1/2 lb',
  }

  const parsed = parseMeal({
    ...ingredients,
  } as unknown as ApiMeal)

  expect(parsed.ingredients).toEqual([
    { name: 'Potatoes', measure: '1/2 lb' },
    { name: 'Onion', measure: '1/2 lb' },
    { name: 'Carrots', measure: '1/2 lb' },
  ])
})

it('should parse ingredients with no measure', () => {
  const ingredients = {
    strIngredient1: 'Potatoes',
    strIngredient2: 'Onion',
    strIngredient3: 'Carrots',
  }

  const parsed = parseMeal({
    ...ingredients,
  } as unknown as ApiMeal)

  expect(parsed.ingredients).toEqual([
    { name: 'Potatoes', measure: null },
    { name: 'Onion', measure: null },
    { name: 'Carrots', measure: null },
  ])
})

it('should exclude ingredient fields with no value', () => {
  const ingredients = {
    strIngredient1: 'Potatoes',
    strMeasure1: '1/2 lb',
    strIngredient2: null,
    strMeasure2: null,
  }

  const parsed = parseMeal({
    ...ingredients,
  } as unknown as ApiMeal)

  expect(parsed.ingredients).toHaveLength(1)
})

it('should exclude ingredients with an empty string or string of whitespace', () => {
  const ingredients = {
    strIngredient1: 'Potatoes',
    strMeasure1: '1/2 lb',
    strIngredient2: '',
    strMeasure2: '',
    strIngredient3: ' ',
    strMeasure3: '',
  }

  const parsed = parseMeal({
    ...ingredients,
  } as unknown as ApiMeal)

  expect(parsed.ingredients).toHaveLength(1)
})
