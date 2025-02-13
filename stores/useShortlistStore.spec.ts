import type { Meal } from '~/types'
import { createPinia, setActivePinia } from 'pinia'

describe('shortlist store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add meal id to shortlist', () => {
    const shortlistStore = useShortlistStore()

    shortlistStore.addToShortlist({
      id: '1',
      name: 'Chicken',
    } as Meal)
    expect(shortlistStore.shortlist).toEqual(['1'])
  })

  it('should remove meal id from shortlist', () => {
    const shortlistStore = useShortlistStore()

    shortlistStore.addToShortlist({
      id: '1',
      name: 'Chicken',
    } as Meal)
    expect(shortlistStore.shortlist).toEqual(['1'])

    shortlistStore.removeFromShortlist({ id: '1' } as Meal)
    expect(shortlistStore.shortlist).toEqual([])
  })

  it('should toggle meal ids in shortlist', () => {
    const shortlistStore = useShortlistStore()

    shortlistStore.addToShortlist({
      id: '1',
      name: 'Chicken',
    } as Meal)
    shortlistStore.addToShortlist({
      id: '2',
      name: 'Beef',
    } as Meal)
    expect(shortlistStore.shortlist).toEqual(['1', '2'])

    shortlistStore.toggleShortlisted({ id: '1' } as Meal)
    expect(shortlistStore.shortlist).toEqual(['2'])

    shortlistStore.toggleShortlisted({ id: '2' } as Meal)
    expect(shortlistStore.shortlist).toEqual([])
  })

  it('should determine if meal is in shortlist', () => {
    const shortlistStore = useShortlistStore()

    shortlistStore.addToShortlist({
      id: '1',
      name: 'Chicken',
    } as Meal)
    shortlistStore.addToShortlist({
      id: '2',
      name: 'Beef',
    } as Meal)

    expect(shortlistStore.hasMealInShortlist({ id: '1' } as Meal)).toBe(true)
    expect(shortlistStore.hasMealInShortlist({ id: '2' } as Meal)).toBe(true)
    expect(shortlistStore.hasMealInShortlist({ id: '3' } as Meal)).toBe(false)
  })
})
